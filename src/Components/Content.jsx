import Anime from './Anime';

const Content = ({ animes, setAnimes }) => {
    // Case when there are too many matches
    if (animes.length > 20) {
        return <p>Too many matches, please refine your search</p>;
    }

    // Case when there's exactly one anime, show the details directly
    if (animes.length === 1) {
        return <Anime anime={animes[0]} />;
    }

    // Case when there are more than 1 but less than or equal to 20 animes
    if (animes.length > 1 && animes.length <= 20) {
        return (
            <ul>
                {animes.map((anime, i) => (
                    <li key={i}>
                        {anime.title}
                        <button onClick={() => setAnimes([anime])}>Show</button>
                    </li>
                ))}
            </ul>
        );
    }

    // Optional: Show a message when no animes match the filter
    if (animes.length === 0) {
        return <p>No matches found</p>;
    }

    return null;
}

export default Content;
