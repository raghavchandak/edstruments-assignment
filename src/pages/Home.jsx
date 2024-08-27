import React from "react";
import "../styles/home.css";
import me from "../assets/me.jpg";

function Home() {
  return (
    <div className="container">
      <div>
        <h1>Hi! My name is Raghav Chandak,</h1>
        <h1>
          Your <span className="diff">Friendly Neighbourhood Developer!</span>
        </h1>
      </div>
      <img src={me} className="img" alt="me" />
    </div>
  );
}

export default Home;
