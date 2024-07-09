import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searcbox";
import Element from "../components/Element";
const Bookmarked = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [filteredContentWithBookmark, setFilteredContentWithBookmark] =
    useState([]);

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
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const [bookmarId, setBookmarId] = useState(() => {
    // Load bookmarks from local storage on initial render
    const savedBookmarks = localStorage.getItem("bookmarkId");
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => {
    const filteredMoviesWithBookmark = movies.filter((movie) =>
      bookmarId.includes(movie.id)
    );
    const filteredTvShowsWithBookmark = tvShows.filter((tvShow) =>
      bookmarId.includes(tvShow.id)
    );
    setFilteredContentWithBookmark([
      ...filteredMoviesWithBookmark,
      ...filteredTvShowsWithBookmark,
    ]);
  }, [movies, tvShows, bookmarId]);

  return (
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Searchbox onSearch={handleSearch} />
        <div className="bookmark-container">
          {filteredContentWithBookmark.map((content) => (
            <Element
              key={content.id}
              year={
                content.release_date
                  ? content.release_date.substring(0, 4)
                  : content.first_air_date
                  ? content.first_air_date.substring(0, 4)
                  : ""
              }
              type={content.title ? "Movie" : "TV Show"}
              name={content.title || content.name}
              attention={content.adult}
              splashart={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
              id={content.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarked;
