import React from "react";
import Search from "../assets/search.svg";

const Searchbox = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
    console.log(onSearch)
  };

  return (
    <div className="search-container">
      <img src={Search} alt="" />
      <input onChange={handleSearch} className="search-input" placeholder="Search for movies or TV series" />
    </div>
  );
};

export default Searchbox;
