import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import Bookmarked from "./pages/Bookmarked";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/tv" element={<TvSeries />} />
      <Route exact path="/movie" element={<Movies />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/bookmarked" element={<Bookmarked />} />
    </Routes>
  </BrowserRouter>
);
