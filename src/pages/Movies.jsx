import React ,{ useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Searcbox from "../components/Searcbox";
import Trendings from "../components/Trendings";
import Recommended from "../components/ElementShow";
const Movies = () => {
  return (
    <>
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Searcbox />
        <Recommended Title="Movies"/>
      </div>
    </div>
  </>
  )
}

export default Movies