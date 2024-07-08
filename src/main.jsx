import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import Bookmarked from "./pages/Bookmarked";
import OneElement from "./pages/OneElement";
import SignUp from "./pages/SignUp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/tv" element={<TvSeries />} />
      <Route exact path="/movie" element={<Movies />} />
      <Route exact path="/bookmarked" element={<Bookmarked />} />
      <Route exact path="/movie/:id" element={<OneElement />} /> {/* Dynamic route */}
      <Route exact path="/tv/:id" element={<OneElement />} /> {/* Dynamic route */}
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/login" element={<Login />} />


    </Routes>
  </BrowserRouter>
);
