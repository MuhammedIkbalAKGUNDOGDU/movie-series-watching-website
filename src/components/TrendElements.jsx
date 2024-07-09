import React, { useState, useEffect } from "react";
import Movie from "../assets/movies.svg";
import { useNavigate } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const TrendElements = ({ year, type, name, attention, splashart, id }) => {
  const [bookmarkId, setBookmarkId] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarkId');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkId', JSON.stringify(bookmarkId));
  }, [bookmarkId]);

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

  const bookmarkElement = (event) => {
    event.stopPropagation(); // Prevent the parent onClick event
    setBookmarkId((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter(bookmarkId => bookmarkId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const isBookmarked = bookmarkId.includes(id);

  return (
    <div onClick={navigateToPage} className="trend-container">
      <img className="trend-splashart" src={splashart} alt="Element Image" />
      <div className="trends-splashart-properties">
        <div className="element-properties">
          <div className="trend-element-properties">{year}</div>
          <div className="trend-element-properties">•</div>
          <MdLocalMovies style={{ backgroundColor: "transparent" }} />
          <div className="trend-element-properties">{type}</div>
          <div className="trend-element-properties">•</div>
          <div className="trend-element-properties">{adult()}</div>
        </div>
        <div className="element-name trend-name">{name}</div>
      </div>
      <div onClick={bookmarkElement} className="bookmark-sign">
        {isBookmarked ? <FaBookmark className="bookmark-sign-icon" /> : <CiBookmark className="bookmark-sign-icon" />}
      </div>
    </div>
  );
};

export default TrendElements;
