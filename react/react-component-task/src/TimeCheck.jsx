import React from "react";

let currentDate = new Date();
let currentTime = currentDate.getHours();
let currentMin = currentDate.getMinutes();
let welcomeNote;
const cssStyle = {};

if (currentTime >= 12 && currentTime <= 19) {
  welcomeNote = "good morning";
  cssStyle.color = "red";
} else {
  welcomeNote = "good night";
  cssStyle.color = "blue";
}

function Timecheck() {
  return (
    <div class="msg-details">
      <h1>
        hello sir <span style={cssStyle}>{welcomeNote}</span>
      </h1>
      <h2>
        {currentTime} Hr :: {currentMin} Minutes
      </h2>
    </div>
  );
}

export default Timecheck;
