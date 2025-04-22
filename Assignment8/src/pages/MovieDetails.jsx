import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/MovieDetails.css";

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

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  const handleBooking = () => {
    navigate("/book");
  };

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="details-container">
      <h2>{movie.title}</h2>
      <p><strong>Screen:</strong> {movie.screen}</p>
      <p><strong>Price:</strong> {movie.price}</p>
      <p>This is a detailed description of {movie.title}.</p>
      <button onClick={handleBooking}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;