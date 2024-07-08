import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searcbox";
import Trendings from "../components/Trendings";
import Recommended from "../components/ElementShow";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Searchbox onSearch={handleSearch} />
        <Trendings />
        <Recommended Title="Recommended for you" searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Home;
