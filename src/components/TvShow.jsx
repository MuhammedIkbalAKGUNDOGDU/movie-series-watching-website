import React, { useState, useEffect } from "react";
import Element from "../components/Element";

const Recommended = ({ Title, searchQuery }) => {
  const [tvShows, setTVShows] = useState([]);
  const [filteredTvShows, setFilteredTvShows] = useState([]);

  useEffect(() => {
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

    fetchTVShows();
  }, []); // Only call once

  useEffect(() => {
    const filtered = tvShows.filter(tvShow => 
      tvShow.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTvShows(filtered);
  }, [tvShows, searchQuery]);

  return (
    <div className="container-trends">
      <div className="trend-title">{Title}</div>
      <div className="element-box">
        {filteredTvShows.map((tvShow) => (
          <Element
            key={tvShow.id}
            year={tvShow.first_air_date ? tvShow.first_air_date.substring(0, 4) : ""}
            type="TV Show"
            name={tvShow.name}
            attention={tvShow.adult}
            splashart={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
            id={tvShow.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
