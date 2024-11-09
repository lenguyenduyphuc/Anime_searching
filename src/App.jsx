import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './Components/Content';
import Filter from './Components/Filter';

const App = () => {
    const [animes, setAnimes] = useState([]);
    const [allAnimes, setAllAnimes] = useState([]);
    const [newFilter, setNewFilter] = useState('');

	useEffect(() => {
		// Using Promise.all to handle both API calls concurrently
		Promise.all([
		  axios.get('https://api.jikan.moe/v4/top/anime'),   // First API call for top animes
		  axios.get('https://api.jikan.moe/v4/seasons/upcoming') // Second API call for upcoming animes
		])
		.then(([topAnimesResponse, upcomingAnimesResponse]) => {
		  console.log('Top Anime Fetch Successful');
		  console.log('Upcoming Anime Fetch Successful');
		  
		  // Combine both sets of animes
		  const allAnimes = [
			...topAnimesResponse.data.data,      // Add top animes to the list
			...upcomingAnimesResponse.data.data // Add upcoming animes to the list
		  ];
	
		  // Set the combined data in the state
		  setAllAnimes(allAnimes);
		})
		.catch((error) => {
		  console.error('Error fetching anime data:', error);
		});
	  }, []); // Empty dependency array ensures this runs only once when the component mounts

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
