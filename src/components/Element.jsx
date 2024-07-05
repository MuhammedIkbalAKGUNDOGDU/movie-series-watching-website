import React from "react";
import Movie from "../assets/movies.svg";

const Element = ({year,type,name,attention,splashart}) => {
  return (
    <div className="element-container">
      <img src={splashart} alt="Element Image" />
      <div className="element-properties">
            <text>{year}</text>
            <text>*</text>
            <img src={Movie} alt="" />
            <text>{type}</text>
            <text>*</text>
            <text>{attention}</text>            
      </div>
      <div className="element-name">
            {name}
      </div>
    </div>
  );
};

export default Element;
