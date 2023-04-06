import React from "react"; // IF WE WANT TO USE HTML MARK UP IN REACT THEN WE HAVE TO IMPORT REACT MODULE
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <h1>hello world</h1> // JSX EXPRESSION
);

ReactDOM.render(<h1> hello world </h1>, document.getElementById("root-new"));
// in react v16 it is possible for render() to return an array of elements.
ReactDOM.render(
  [<h1> hello world </h1>, <p> lets start</p>],
  document.getElementById("root-three")
);

reportWebVitals();
export default App;
