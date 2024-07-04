import React from "react";
import Sidebar from "../components/Sidebar";
import Searcbox from "../components/Searcbox";
import Trendings from "../components/Trendings";
import Recommended from "../components/Recommended";
const Home = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="container-2">
          <Searcbox />
          <Trendings />
          <Recommended />
        </div>
      </div>
    </>
  );
};

export default Home;
