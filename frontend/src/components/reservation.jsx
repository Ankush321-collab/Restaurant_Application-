import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Reservation = () => {
  const [loading, setLoad] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRev = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/reserve",
        { firstname, lastname, email, phone, date, time },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Reservation failed");
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>Make Your Reservation</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleRev}>
              <div>
                <input
                  type="text"
                  placeholder="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit">
                {loading ? "Reserving..." : "Reserve"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
