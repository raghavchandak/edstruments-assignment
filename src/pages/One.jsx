import React from "react";
import "../styles/one.css";

function One() {
  return (
    <div className="one-container">
      <div className="about">
        <h1>About Me</h1>
        <p>
          Hello, I'm Raghav Chandak, and I'm from Kolkata, India. I completed my
          BSc Honors in Computing Science from the University of Alberta,
          Canada.
          <br /> <br />
          My fascination with technology and its continuous evolution has always
          driven me. I’ve been an avid follower of Apple ever since the iPhone
          first came out and am simply amazed at the rapid pace technology is
          advancing. I’m eager to be a part of this field and make a significant
          contribution.
          <br /> <br /> Beyond academics, I'm deeply passionate about sports,
          particularly football and cricket. I've been an active participant in
          various football teams and even had the honor of representing my
          school at the district level.
        </p>
      </div>
      <div className="hobbies">
        <h1>Hobbies</h1>
        <ul>
          <li>
            I love sports - mainly cricket and football. I am an avid Manchester
            United supporter
          </li>
          <li>I like to watch movies or TV series in my spare time</li>
          <li>
            I also enjoy playing board games, and am very competitive at it!
          </li>
          <li>Lastly, I am very adventurous and like exploring new places</li>
        </ul>
      </div>
    </div>
  );
}

export default One;
