import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './Components/Content';
import Filter from './Components/Filter';

const App = () => {
    const [animes, setAnimes] = useState([]);
    const [allAnimes, setAllAnimes] = useState([]);
    const [newFilter, setNewFilter] = useState('');

    useEffect(() => {
        axios
        .get('https://api.jikan.moe/v4/top/anime')
        .then((response) => {
            console.log('Fetch successful');
            setAllAnimes(response.data.data); // Correctly accessing the 'data' array
        });
    }, []);

    const handleFilterChange = (event) => {
        const filter = event.target.value;
        setNewFilter(filter);

        if (filter) {
            // Create a case-insensitive regular expression
            const regex = new RegExp(filter, 'i');

            // Filter animes based on the title
            const filteredAnimes = allAnimes.filter((anime) => {
                return regex.test(anime.title); // Correct access to the 'title' property
            });
            setAnimes(filteredAnimes);
        } else {
            // Show all animes when filter is empty
            setAnimes(allAnimes);
        }
    };

    return (
        <div>
            <Filter value={newFilter} onChange={handleFilterChange} />
            <Content animes={animes} setAnimes={setAnimes} />
        </div>
    );
};

export default App;
