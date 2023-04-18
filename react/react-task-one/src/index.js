import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
let curDate = new Date();
let hour = curDate.getHours();

if (hour >= 1 && hour < 12) {
  const backColor = {
    backgroundColor: "#ac5353",
  };
}
if (hour >= 12 && hour < 1) {
  const backColor = {
    backgroundColor: "#ac5353",
  };
}
root.render(
  <div class="full-box">
    <div class="detail-box">
      <p style={backColor}>hello sir, good morning</p>
    </div>
  </div>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
