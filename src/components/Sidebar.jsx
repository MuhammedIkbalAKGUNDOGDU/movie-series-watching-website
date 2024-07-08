import React from "react";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";


const Sidebar = () => {
  const navigate = useNavigate();
 

  return (
    <div className="sidebar">
      <div className="inner-sidebar">
        <div className="sidebar-logo">
          <img onClick={() => navigate("/")} className="sidebar-logo sidebar-click" src={Logo} alt="" />
        </div>
        <div className="sidebar-images">
          <div className="sidebar-images">
            <FaHome onClick={() => navigate("/")} className="sidebar-click sidebar-icon"/>
          </div>
          <div className="sidebar-images">
            <MdLocalMovies onClick={() => navigate("/movie")} className="sidebar-click sidebar-icon"/>
          </div>
          <div className="sidebar-images">
            <PiTelevision onClick={() => navigate("/tv")} className="sidebar-click sidebar-icon"/>

          </div>
          <div className="sidebar-images">
            <FaBookmark onClick={() => navigate("/bookmarked")} className="sidebar-click sidebar-icon"/>

          </div>
        </div>
      </div>
      <div className="sidebar-images">
        <img className="sidebar-avatar sidebar-avatar-click" src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
