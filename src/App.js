import './App.css';
import SearchMovies from './searchMovies';
import { useState } from 'react';
import FavouriteList from "./FavouriteList";

function App() {
  const [favourites, setfavourites] = useState([])
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [selectedMOvie, setDelectedMovie] = useState(null)
  const addFavourite = movie => {
      setfavourites([...favourites, movie]);
  };
  console.log(favourites)
  
  const removeFavourite = movie => {
    setfavourites(favourites.filter(f => f.imdbID !== movie.imdbID))
  }

  const showModel = movie => {
    setDelectedMovie(movie)
    setIsModelOpen(true)
  }

  return (
      <div className="App">
          <SearchMovies addFavourite={addFavourite} />
          <FavouriteList favourites={favourites} removeFavourite={removeFavourite} showModel={showModel}/>
      </div>
  );
}


// 6a9af4a3-e331-4927-ba0b-f4f10ce93f8a
export default App;
