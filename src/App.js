import { useState,useEffect } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

// 14533677

const API_URL = 'http://www.omdbapi.com?apikey=a3c8c064';

const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search);
 }

 useEffect(() => {
  searchMovies('Spiderman');
 },[])

 return(
  <div className="app">
   <h1>MovieLand</h1>

   <div className="search">
     <input 
      placeholder="Search For Movies"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
     />
     <img 
      src={SearchIcon}
      alt='search'
      onClick={() => searchMovies(searchTerm)}
     />
   </div>

   {
     movies?.length > 0
     ? (    
        <div className="container">
          {movies.map((movies) => (
            <MovieCard movie={movies} />
          ))}
        </div>
     ) : (
       <div className="empty">
         <h2>No Movies Found</h2>
       </div>
     )
   }
   <div className="footer">
      <p>Developed By Abir. Designed By "JavaScript Mastery"</p>
   </div>
  </div>
 )
};

export default App;