import React from "react";
import Home from "../assets/home.svg";
import Movie from "../assets/movies.svg";
import Logo from "../assets/logo.svg";
import Tv from "../assets/tv.svg";
import Bookmark from "../assets/bookmark.svg";
import Avatar from "../assets/avatar.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="inner-sidebar">
        <div className="sidebar-logo">
          <img className="sidebar-logo sidebar-click" src={Logo} alt="" />
        </div>
        <div className="sidebar-images">
          <div className="sidebar-images">
            <img className="sidebar-click" src={Home} alt="" />
          </div>
          <div className="sidebar-images">
            <img className="sidebar-click" src={Movie} alt="" />
          </div>
          <div className="sidebar-images">
            <img className="sidebar-click" src={Tv} alt="" />
          </div>
          <div className="sidebar-images">
            <img className="sidebar-click" src={Bookmark} alt="" />
          </div>
        </div>
      </div>
      <div className="sidebar-images">
        <img className="sidebar-avatar click" src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
