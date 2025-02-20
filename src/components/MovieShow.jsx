import React, { useState, useEffect } from "react";
import Element from "../components/Element";

const MovieShow = ({ Title, searchQuery  }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

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

    fetchData();
  }, []); // Only call once

  useEffect(() => {
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchQuery]);

  return (
    <div className="container-trends">
      <div className="trend-title">{Title}</div>
      <div className="element-box">
        {filteredMovies.map((movie) => (
          <Element
            key={movie.id}
            year={movie.release_date ? movie.release_date.substring(0, 4) : ""} // Get year if release_date exists
            type="Movie"
            name={movie.title}
            attention={movie.adult} // Example logic based on adult property
            splashart={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            id={movie.id}
          />
        ))}

      </div>
    </div>
  );
};

export default MovieShow;
