import React from "react";
import "../styles/MovieList.css";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = [
    { id: "1", title: "Stree 2", screen: "Platinum", price: "$15", image: "stree2.jpeg" },
    { id: "2", title: "Gadar 2", screen: "Gold", price: "$10", image: "gadar2.jpeg" },
    { id: "3", title: "Housefull 5", screen: "Silver", price: "$5", image: "housefull5.jpeg" },
    { id: "4", title: "Jolly LLB 3", screen: "Platinum", price: "$12", image: "jollyllb3.jpeg" },
    { id: "5", title: "Baaghi 4", screen: "Gold", price: "$8", image: "baaghi4.jpeg" },
    { id: "6", title: "Pushpa 2", screen: "Silver", price: "$7", image: "pushpa2.jpeg" },
    { id: "7", title: "Kantara", screen: "Platinum", price: "$15", image: "kantara.jpeg" },
    { id: "8", title: "Toxic", screen: "Gold", price: "$9", image: "toxic.jpeg" },
    { id: "9", title: "Raid 2", screen: "Silver", price: "$6", image: "raid2.jpeg" },
    { id: "10", title: "Sky Force", screen: "Platinum", price: "$13", image: "skyforce.jpeg" },
    { id: "11", title: "Sikandar", screen: "Gold", price: "$11", image: "sikandar.jpeg" },
    { id: "12", title: "Jaat", screen: "Silver", price: "$5", image: "jaat.jpeg" },
    { id: "13", title: "Chaava", screen: "Platinum", price: "$14", image: "chaava.jpeg" },
    { id: "14", title: "Pathaan", screen: "Platinum", price: "$20", image: "pathaan.jpg" },
    { id: "15", title: "Jawan", screen: "Gold", price: "$18", image: "jawan.jpg" },
    { id: "16", title: "Marco", screen: "Silver", price: "$6", image: "marco.jpeg" }
  ];

  return (
    <div className="movie-list-container">
      <h1>Movie Booking App</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
            <img className="image" src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
            <p>{movie.screen}</p>
            <p>{movie.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;