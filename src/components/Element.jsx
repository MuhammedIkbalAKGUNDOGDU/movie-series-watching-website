import React from "react";
import Movie from "../assets/movies.svg";
import { useNavigate } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";

const Element = ({ year, type, name, attention, splashart, id }) => {
  const adult = () => {
    return (attention) ? "18+" : "PG";
    
  };
  const navigate = useNavigate();

  const navigateToPage = () => {
    if(type == Movie){
      navigate(`/movie/${id}`); // Navigate to a dynamic route based on the type
    }else{
      navigate(`/tv/${id}`); // Navigate to a dynamic route based on the type
    }
  }

  const tvOrMovie = (type) => {
    if(type == "Movie"){
       return <MdLocalMovies></MdLocalMovies>
    }else{
      return <PiTelevision></PiTelevision>
    }
  }

  return (
    <div onClick={navigateToPage} className="element-container">
      <img className="element-splashart" src={splashart} alt="Element Image" />
      <div className="element-properties">
        <div>{year}</div>
        <div>•</div>
        <div>
          {tvOrMovie(type)}
        </div>
        <div>{type}</div>
        <div>•</div>
        <div>{adult()}</div>
      </div>
      <div className="element-name">{name}</div>
    </div>
  );
};

export default Element;
