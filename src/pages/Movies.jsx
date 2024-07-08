import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searcbox";
import MovieShow from "../components/MovieShow";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Searchbox onSearch={handleSearch} />
        <MovieShow Title="Movies" searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Movies;
