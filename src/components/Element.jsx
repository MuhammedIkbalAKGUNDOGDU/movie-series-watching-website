import React from "react";
import Movie from "../assets/movies.svg";

const Element = ({ year, type, name, attention, splashart }) => {
  const adult = () => {
    return attention ? "18+" : "PG";
  };

  return (
    <div className="element-container">
      <img className="element-splashart" src={splashart} alt="Element Image" />
      <div className="element-properties">
        <div>{year}</div>
        <div>*</div>
        <img className="properties-icon"src={Movie} alt="Movie Icon" />
        <div>{type}</div>
        <div>*</div>
        <div>{adult()}</div>
      </div>
      <div className="element-name">{name}</div>
    </div>
  );
};

export default Element;
