// import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import'./row.css';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, SetMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // console.log(request);
      SetMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  const opts={
    height:"390",
    width:'100%',
    playerVars:{
      autoplay:1,
    }
  }
  const handleClick=(movie)=>{
    
   if (trailerUrl) {
     setTrailerUrl("");
   } else{
    //  console.log(movie.original_title);
     movieTrailer(movie?.original_title ||"") 
     .then(url=>{
       
        const urlParams= new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
        


     }).catch((err)=>console.log(err.message));
   }

  }
  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters ">
        {movies.map((movie) => (
          <img key={movie.id}
          onClick={()=>handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}` }
            src={`${base_url}${ isLargeRow? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
     {  trailerUrl&& <YouTube videoId={trailerUrl} opts={opts}/>}
 
    </div>
  );
}

export default Row;
