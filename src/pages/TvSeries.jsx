import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searcbox";
import Tvshow from "../components/TvShow";
import { Helmet } from 'react-helmet';

const TvSeries = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query)
  };

  return (
    <div className="container">
      <Helmet>
        <title>Tv Series</title>
      </Helmet>
      <Sidebar />
      <div className="container-2">
        <Searchbox onSearch={handleSearch} />
        <Tvshow Title="TV Series"  searchQuery={searchQuery}/>
      </div>
    </div>
  );
};

export default TvSeries;
