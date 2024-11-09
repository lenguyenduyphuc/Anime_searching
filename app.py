from flask import Flask, jsonify, render_template, request
import requests
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///anime.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Anime(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    synopsis = db.Column(db.Text, nullable=True)
    score = db.Column(db.Float, nullable=True)

def insert_data(data):
    for item in data['data']:
        anime = Anime.query.get(item['mal_id'])
        if not anime:  # Avoid duplicates
            anime = Anime(
                id=item['mal_id'],
                title=item['title'],
                synopsis=item.get('synopsis'),
                score=item.get('score')
            )
            db.session.add(anime)
    db.session.commit()

@app.route('/')
def index():
    response = requests.get('https://api.jikan.moe/v4/anime')
    data = response.json()
    insert_data(data)
    return "Data inserted into the database!"

if __name__ == '__main__':
    with app.app_context():  # Ensures db.create_all() works within an app context
        db.create_all()
    app.run(debug=True)
