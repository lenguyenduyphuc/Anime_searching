const Anime = ({ anime }) => {
    if (!anime) {
        return <p>No anime data available</p>; 
    }

    // Fallback for missing title
    const title = anime.title || "Title not available";

    return (
        <div>
            <h1>{title}</h1>
            <p>Episodes: {anime.episodes ? anime.episodes : "Data not available"}</p> {/* Display fallback if episodes is missing */}
            <img src={anime.images.jpg.large_image_url} alt={anime.images.jpg.large_image_url} />
        </div>
    )
}

export default Anime;
