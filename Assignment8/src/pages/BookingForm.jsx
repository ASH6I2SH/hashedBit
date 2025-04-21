import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("booking", JSON.stringify(formData));
    navigate("/confirmation");
  };

  return (
    <div className="form-container">
      <h2>Book Your Seat</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
