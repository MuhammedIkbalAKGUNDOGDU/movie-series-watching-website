import React ,{ useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Searcbox from "../components/Searcbox";
import Trendings from "../components/Trendings";
import MovieShow from "../components/MovieShow";
const Movies = () => {
  return (
    <>
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Searcbox />
        <MovieShow Title="Movies"/>
      </div>
    </div>
  </>
  )
}

export default Movies