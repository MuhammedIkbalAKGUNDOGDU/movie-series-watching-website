import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import Play from "../assets/play.svg";

const OneElement = () => {
  const { id } = useParams();
  const [elementData, setElementData] = useState(null);

  useEffect(() => {
    const fetchElementData = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=365a153ca89400a4c6bd390fbbe93f59`
        );
        const tvResponse = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=365a153ca89400a4c6bd390fbbe93f59`
        );

        if (!movieResponse.ok || !tvResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const movieData = await movieResponse.json();
        const tvData = await tvResponse.json();

        // Gelen ID'ye göre ilgili veriyi bul
        const movieElement = movieData.results.find(
          (movie) => movie.id.toString() === id
        );
        const tvElement = tvData.results.find((tv) => tv.id.toString() === id);

        if (movieElement) {
          setElementData(movieElement);
        } else if (tvElement) {
          setElementData(tvElement);
        } else {
          throw new Error("Element not found");
        }
      } catch (error) {
        console.error("Error fetching element data:", error);
      }
    };

    fetchElementData();
  }, [id]);

  if (!elementData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="oneElement-Container">
      <Sidebar />
      <div className="oneElement-Container2">
        <h1>{elementData.title || elementData.name}</h1>
        <p>{elementData.overview}</p>
        <div className="oneElement-inner-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${elementData.poster_path}`}
            alt={elementData.title || elementData.name}
          />
          <div className="oneElement-properties-container">
            <div className="oneElement-properties">
              {" "}
              Original Name :{" "}
              {elementData.original_name || elementData.original_title}
            </div>
            <div className="oneElement-properties">
              {" "}
              IMDB : {elementData.vote_average}
            </div>
            <div className="oneElement-properties">
              {" "}
              Popularity : {elementData.popularity}
            </div>
            <div className="oneElement-properties">
              {" "}
              Original Language : {elementData.original_language}
            </div>
            <div className="oneElement-properties">
              {" "}
              Release Date :{" "}
              {elementData.first_air_date || elementData.release_date}
            </div>
            <div className="oneElement-properties-img-container">
              <img
                className="oneElement-properties oneElement-properties-img"
                src={Play}
                alt="Play"
              />
              <div>Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneElement;
