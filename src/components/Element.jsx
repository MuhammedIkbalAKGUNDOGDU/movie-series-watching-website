import React from "react";
import Movie from "../assets/movies.svg";
import { useNavigate } from "react-router-dom";


const Element = ({ year, type, name, attention, splashart, id }) => {
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
    <div onClick={navigateToPage} className="element-container">
      <img className="element-splashart" src={splashart} alt="Element Image" />
      <div className="element-properties">
        <div>{year}</div>
        <div>•</div>
        <img className="properties-icon"src={Movie} alt="Movie Icon" />
        <div>{type}</div>
        <div>•</div>
        <div>{adult()}</div>
      </div>
      <div className="element-name">{name}</div>
    </div>
  );
};

export default Element;
