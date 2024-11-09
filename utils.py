from flask import Flask, jsonify, render_template, request
import requests

app = Flask(__name__)

@app.route('/api/data', methods=["GET"])
def get_data():
    try: 
        response = requests.get('https://api.jikan.moe/v4/anime')

        response.raise_for_status()
        data = response.json()

    except requests.exceptions.HTTPError as http_err:
        return jsonify({'error': f'HTTP error occurred: {http_err}'}), 500
    except Exception as err:
        return jsonify({'error': f'Other error occurred: {err}'}), 500
    print(response)
    return jsonify(data)