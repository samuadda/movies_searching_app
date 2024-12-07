import React, { useState } from "react";

function SearchMovies({ addFavourite }) {
    const [movieTitle, setMovieTitle] = useState("");

    const findMovie = async e => {
        e.preventDefault();
        const url = `https://www.omdbapi.com/?apikey=209aaa1d&s=${movieTitle}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            addFavourite(data.Search[0]);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={findMovie}>
                <label htmlFor="query">Movie Title</label>
                <input type="text" name="query" value={movieTitle} onChange={e => setMovieTitle(e.target.value)} placeholder="name a movie!" role="search" />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default SearchMovies;
