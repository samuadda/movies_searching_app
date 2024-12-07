import FavouriteMovie from "./FavouriteMovie";


function FavouriteList({ favourites, removeFavourite, showModel }) {
    return (
        <>
            <h3>My favorite movies</h3>
            {favourites.length > 0 ? (
                <ul>
                    {favourites.map(movie => (
                        <FavouriteMovie key={movie.imdbID} movie={movie} removeFavourite={removeFavourite} showModel={showModel} />
                    ))}
                </ul>
            ) : (
                <p>you have no movies.</p>
            )}
        </>
    );
}

export default FavouriteList;