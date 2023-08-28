import "./Booking.css";
import Nav from "./Nav";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numDiners, setNumDiners] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tablePosition, setTablePosition] = useState("inside"); // Default value: Inside

  const handleSubmit = e => {
    e.preventDefault();
    // Process form data here
    console.log("Form submitted:", {
      date,
      time,
      numDiners,
      fullName,
      email,
      phone,
      tablePosition,
    });
  };

  return (
    <>
      <Nav />
      <div className="generl_container">
        <div className="form_title_text">
          <h1 className="book_text">Book Now!</h1>
          <p className="book_para_text">
            To book a reservation, please fill out the form:
          </p>
        </div>

        <div className="form_container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
            <br />
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
            />
            <br />
            <label htmlFor="numDiners">Number of Diners:</label>
            <input
              type="number"
              id="numDiners"
              value={numDiners}
              onChange={e => setNumDiners(e.target.value)}
              required
            />
            <br />

            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <br />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <br />
            <div className="table-position">
              Select Table Position
              <label>
                <input
                  type="radio"
                  name="tablePosition"
                  value="inside"
                  checked={tablePosition === "inside"}
                  onChange={() => setTablePosition("inside")}
                />
                Inside
              </label>
              <label>
                <input
                  type="radio"
                  name="tablePosition"
                  value="outside"
                  checked={tablePosition === "outside"}
                  onChange={() => setTablePosition("outside")}
                />
                Outside
              </label>
            </div>

            <Link to="/ComfirmationPage">
              <button type="submit">Submit</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;
