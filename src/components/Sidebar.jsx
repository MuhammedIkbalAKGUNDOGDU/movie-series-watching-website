import React, { useEffect } from "react";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { SiComsol } from "react-icons/si";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;

  const homeIconClass = currentUrl === "/" ? "sidebar-icon sidebar-click active" : "sidebar-click sidebar-icon";
  const movieIconClass = currentUrl === "/movie" ? "sidebar-icon sidebar-click active" : "sidebar-click sidebar-icon";
  const tvIconClass = currentUrl === "/tv" ? "sidebar-icon sidebar-click active" : "sidebar-click sidebar-icon";
  const bookmarkIconClass = currentUrl === "/bookmarked" ? "sidebar-icon sidebar-click active" : "sidebar-click sidebar-icon";

  return (
    <div className="sidebar">
      <div className="inner-sidebar">
        <div className="sidebar-logo">
          <img onClick={() => navigate("/")} className="sidebar-logo sidebar-click" src={Logo} alt="" />
        </div>
        <div className="sidebar-images">
          <FaHome onClick={() => navigate("/")} className={homeIconClass} />
        </div>
        <div className="sidebar-images">
          <MdLocalMovies onClick={() => navigate("/movie")} className={movieIconClass} />
        </div>
        <div className="sidebar-images">
          <PiTelevision onClick={() => navigate("/tv")} className={tvIconClass} />
        </div>
        <div className="sidebar-images">
          <FaBookmark onClick={() => navigate("/bookmarked")} className={bookmarkIconClass} />
        </div>
      </div>
      <div className="sidebar-images">
        <img className="sidebar-avatar sidebar-avatar-click" src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
