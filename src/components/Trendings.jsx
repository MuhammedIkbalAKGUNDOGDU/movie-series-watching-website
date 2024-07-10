import React, { useState, useEffect } from "react";
import TrendElements from "./TrendElements";

const Trendings = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=365a153ca89400a4c6bd390fbbe93f59&sort_by=popularity.desc"
        );
        if (!movieResponse.ok) {
          throw new Error("Network response for movies was not ok");
        }
        const movieData = await movieResponse.json();

        const tvResponse = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=365a153ca89400a4c6bd390fbbe93f59&sort_by=popularity.desc"
        );
        if (!tvResponse.ok) {
          throw new Error("Network response for TV shows was not ok");
        }
        const tvData = await tvResponse.json();

        // Combine movies and TV shows into one array and sort by popularity
        const combinedTrendings = [
          ...movieData.results.map((movie) => ({
            ...movie,
            media_type: "movie",
          })),
          ...tvData.results.map((tvShow) => ({ ...tvShow, media_type: "tv" })),
        ].sort((a, b) => b.popularity - a.popularity);

        setTrendings(combinedTrendings); // Set combined and sorted data
      } catch (error) {
        console.error("Error fetching trendings:", error);
      }
    };

    fetchData();
  }, []); // Only call once

  return (
    <div className="container-trends">
      <div className="trend-title">Trending Movies and TV Shows</div>
      {/* Display only first 5 trendings */}
      <div className="trend-elements">
        {trendings.slice(0, 5).map((item) => (
          <TrendElements
            key={item.id}
            year={
              item.media_type === "movie"
                ? item.release_date
                  ? item.release_date.substring(0, 4)
                  : ""
                : item.first_air_date
                ? item.first_air_date.substring(0, 4)
                : ""
            }
            type={item.media_type === "movie" ? "Movie" : "TV Show"}
            name={item.media_type === "movie" ? item.title : item.name}
            attention={item.adult}
            splashart={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Trendings;
