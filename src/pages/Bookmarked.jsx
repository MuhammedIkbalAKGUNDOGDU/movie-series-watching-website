import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searcbox";
import Recommended from "../components/ElementShow";

const Bookmarked = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Searchbox onSearch={handleSearch} />
        <Recommended Title="Bookmarked Movies and TV Series" searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Bookmarked;
