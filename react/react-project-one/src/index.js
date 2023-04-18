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
// in react v16 it is possible for render() to return an array of elements
ReactDOM.render(
  [<h1> hello world i am here</h1>, <p> lets start</p>],
  document.getElementById("root-three")
);

// jsx expression
const flname = "ayush";
ReactDOM.render(
  <>
    <h1>my name is {flname}</h1>
    <p>my lucky number is {2 + 5}</p>
  </>,
  document.getElementById("jsx-expression")
);
//template literals
//template literals is like when we use variable in string javascript we use backticks `` that statement is known as template literals

const flnames = "ayush";
const lname = "saxena";
ReactDOM.render(
  <>
    <h1>{`my name is ${flnames}  ${lname}`}</h1>
  </>,
  document.getElementById("template-literals")
);

// jsx attributes
//
const img1 =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";
ReactDOM.render(
  <>
    <h1 contentEditable="true" style={{ color: "red", textAlign: "center" }}>
      jsx attribute
    </h1>
    ,<p> lets start</p>,
    <img
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      alt="demo image"
    />
    <img src={img1} alt="demo image" />
  </>,
  document.getElementById("jsx-attribute")
);
reportWebVitals();
export default App;
