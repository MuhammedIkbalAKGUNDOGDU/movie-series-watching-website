import React from "react";
import Movie from "../assets/movies.svg";

const TrendElements = ({ year, type, name, attention, splashart }) => {
  const adult = () => {
    return attention ? "18+" : "PG";
  };

  return (
    <div className="trend-container">
      <img className="trend-splashart" src={splashart} alt="Element Image" />
      <div className="trends-splashart-properties">
        <div className="element-properties">
          <div>{year}</div>
          <div>*</div>
          <img src={Movie} alt="Movie Icon" />
          <div>{type}</div>
          <div>*</div>
          <div>{adult()}</div>
        </div>
        <div className="element-name trend-name">{name}</div>
      </div>
    </div>
  );
};

export default TrendElements;
