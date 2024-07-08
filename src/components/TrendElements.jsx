import React from "react";
import Movie from "../assets/movies.svg";
import { useNavigate } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";

const TrendElements = ({ year, type, name, attention, splashart, id }) => {
  const adult = () => {
    return attention ? "18+" : "PG";
  };

  const navigate = useNavigate();

  const navigateToPage = () => {
    if(type == Movie){
      navigate(`/movie/${id}`); // Navigate to a dynamic route based on the type
    }else{
      navigate(`/tv/${id}`); // Navigate to a dynamic route based on the type

    }
  }


  return (
    <div onClick={navigateToPage} className="trend-container">
      <img className="trend-splashart" src={splashart} alt="Element Image" />
      <div className="trends-splashart-properties">
        <div className="element-properties">
          <div className="trend-element-properties">{year}</div>
          <div className="trend-element-properties">•</div>
          <MdLocalMovies style={{backgroundColor : "transparent"}}/>
          <div className="trend-element-properties">{type}</div>
          <div className="trend-element-properties">•</div>
          <div className="trend-element-properties">{adult()}</div>
        </div>
        <div className="element-name trend-name">{name}</div>
      </div>
    </div>
  );
};

export default TrendElements;
