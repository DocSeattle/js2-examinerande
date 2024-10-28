import { useState, useEffect } from 'react';
import './assets/Films.css';

export default function Films()
{
  const uri = "https://gist.githubusercontent.com/aspcodenet/32a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json"
  const [Listing, setListing] = useState([]); 
  useEffect(() => {
    const fetchFilms = async () => {
      const response = await fetch(uri);
      const json = await response.json();
      setListing(json);
    };
    fetchFilms();
  }, []);
  return (
    <div className="movie-container">
    <label htmlFor="movie">Pick a film:</label>
    <select  name="movie" id="movie">
      {Listing.map((film, index) => (
        <option key={index} value={film.Price}>{film.Title} | {film.Price}:- </option>
      )) }
    </select> 
   </div>
 );
}