import React ,{ useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Searcbox from "../components/Searcbox";
import Trendings from "../components/Trendings";
import Tvshow from "../components/TvShow";

const TvSeries = () => {
  return (
    <>
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Searcbox />
        <Tvshow Title="TV Series"/>
      </div>
    </div>
  </>
  )
}

export default TvSeries