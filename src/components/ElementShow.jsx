import React, { useState, useEffect } from "react";
import Element from "../components/Element";

const Recommended = ({ Title, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
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

    fetchMovies();
    fetchTVShows();
  }, []); // Only call once

  useEffect(() => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredTvShows = tvShows.filter(tvShow =>
      tvShow.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContent([...filteredMovies, ...filteredTvShows]);
  }, [movies, tvShows, searchQuery]);

  return (
    <div className="container-trends">
      <div className="trend-title">{Title}</div>
      <div className="element-box">
        {filteredContent.map(content => (
          <Element
            key={content.id}
            year={content.release_date ? content.release_date.substring(0, 4) : (content.first_air_date ? content.first_air_date.substring(0, 4) : "")}
            type={content.title ? "Movie" : "TV Show"}
            name={content.title || content.name}
            attention={content.adult}
            splashart={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
            id={content.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
