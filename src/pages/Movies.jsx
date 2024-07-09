import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searcbox";
import MovieShow from "../components/MovieShow";
import { Helmet } from 'react-helmet';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container">
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <Sidebar />
      <div className="container-2">
        <Searchbox onSearch={handleSearch} />
        <MovieShow Title="Movies" searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Movies;
