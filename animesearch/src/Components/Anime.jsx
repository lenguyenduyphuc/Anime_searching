import React from 'react'

const Anime = ({ anime }) => {
    if (!anime) {
        return <p>No anime data available</p>; // Handle case where anime is not passed or is undefined.
    }

    // Fallback for missing title
    const title = anime.title || "Title not available";

    return (
        <div>
            <h1>{title}</h1>
            <p>Episodes: {anime.episodes ? anime.episodes : "Data not available"}</p> {/* Display fallback if episodes is missing */}
        </div>
    )
}

export default Anime;
