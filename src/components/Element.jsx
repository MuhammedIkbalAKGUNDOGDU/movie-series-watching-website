import React, { useState, useEffect } from "react";
import Movie from "../assets/movies.svg";
import { useNavigate } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Element = ({ year, type, name, attention, splashart, id }) => {
  const [bookmarId, setBookmarId] = useState(() => {
    // Load bookmarks from local storage on initial render
    const savedBookmarks = localStorage.getItem('bookmarkId');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkId', JSON.stringify(bookmarId));
  }, [bookmarId]);

  const adult = () => {
    return attention ? "18+" : "PG";
  };

  const navigate = useNavigate();

  const navigateToPage = () => {
    if (type === "Movie") {
      navigate(`/movie/${id}`);
    } else {
      navigate(`/tv/${id}`);
    }
  };

  const tvOrMovie = (type) => {
    return type === "Movie" ? <MdLocalMovies /> : <PiTelevision />;
  };

  const bookmarkElement = (event) => {
    event.stopPropagation(); // Prevent the parent onClick event
    setBookmarId((prevIds) => {
      const newIds = prevIds.includes(id) ? prevIds.filter(bookmarkId => bookmarkId !== id) : [...prevIds, id];
      localStorage.setItem('bookmarkId', JSON.stringify(newIds)); // Update localStorage immediately
      return newIds;
    });
  };

  const isBookmarked = bookmarId.includes(id);

  return (
    <div onClick={navigateToPage} className="element-container">
      <img className="element-splashart" src={splashart} alt="Element Image" />
      <div className="element-properties">
        <div>{year}</div>
        <div>•</div>
        <div>{tvOrMovie(type)}</div>
        <div>{type}</div>
        <div>•</div>
        <div>{adult()}</div>
      </div>
      <div className="element-name">{name}</div>
      <div
        onClick={bookmarkElement}
        className="bookmark-sign"
      >
        {isBookmarked ? <FaBookmark className="bookmark-sign-icon" /> : <CiBookmark className="bookmark-sign-icon" />}
      </div>
    </div>
  );
};

export default Element;
