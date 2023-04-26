import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div class="msg-details">
      <h1>
        hello sir <span style={cssStyle}>{welcomeNote}</span>
      </h1>
      <h2>
        {currentTime} Hr :: {currentMin} Minutes
      </h2>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
