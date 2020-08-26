import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";

function MovieItem(props) {
  console.log("props=", props);
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.rate}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem title="title_new" rate={10.1} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
