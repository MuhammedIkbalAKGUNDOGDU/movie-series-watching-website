import React from "react";
import Search from "../assets/search.svg";

const Searcbox = () => {
  return (
    <>
      <div className="search-container">
        <img src={Search} alt="" />
        <input className="search-input" placeholder="Search for movies or TV series"></input>
      </div>
    </>
  );
};

export default Searcbox;
