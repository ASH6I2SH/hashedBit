import React, { useEffect, useState } from "react";
import "../styles/Confirmation.css";

function Confirmation() {
  const [details, setDetails] = useState({});
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("booking"));
    setDetails(data);
    setBookingId(Math.random().toString(36).substr(2, 9).toUpperCase());
  }, []);

  return (
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Email:</strong> {details.email}</p>
      <p><strong>Mobile:</strong> {details.mobile}</p>
    </div>
  );
}

export default Confirmation;
