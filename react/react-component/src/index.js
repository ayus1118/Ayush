import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Heading from "./Heading.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Heading />
    <ol>
      <li>data 1</li>
      <li>data 2</li>
      <li>data 3</li>
      <li>data 4</li>
    </ol>
  </>
);

reportWebVitals();
