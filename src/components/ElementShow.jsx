import React, { useState, useEffect } from "react";
import Element from "../components/Element";

const Recommended = ({ Title }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=365a153ca89400a4c6bd390fbbe93f59"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results); // Set movie data
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchTVShows = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=365a153ca89400a4c6bd390fbbe93f59"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTVShows(data.results); // Set TV show data
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    };

    fetchData();
    fetchTVShows();
  }, []); // Only call once

  return (
    <div className="container-trends">
      <div className="trend-title">{Title}</div>
      <div className="element-box">
        {movies.map((movie) => (
          <Element
            key={movie.id}
            year={movie.release_date ? movie.release_date.substring(0, 4) : ""} // Get year if release_date exists
            type="Movie"
            name={movie.title}
            attention={movie.adult ? "18+" : "PG"} // Example logic based on adult property
            splashart={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            id={movie.id}
          />
        ))}

        {tvShows.map((tvShow) => (
          <Element
            key={tvShow.id}
            year={
              tvShow.first_air_date ? tvShow.first_air_date.substring(0, 4) : ""
            } // Get year if first_air_date exists
            type="TV Show" // Correct type for TV show
            name={tvShow.name} // TV show title
            attention={tvShow.adult ? "18+" : "PG"} // Example logic based on adult property
            splashart={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
            id={tvShow.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
