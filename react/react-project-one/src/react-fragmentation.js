import React from "react"; // IF WE WANT TO USE HTML MARK UP IN REACT THEN WE HAVE TO IMPORT REACT MODULE
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <h1>hello world</h1> // JSX EXPRESSION
);

reportWebVitals();
export default App;
