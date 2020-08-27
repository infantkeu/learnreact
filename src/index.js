import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";

const movie = {
  title: "Avarage",
  rate: "10.1",
  image: "https://rwhi6.csb.app/avarage.jpg",
  overview: "Описание фильма!!!!"
};

function Image (props) {
  console.log("Image props", props);
  return (
    <img src={props.src} alt={props.alt} />
  );
}

function MovieItem (props) {
  console.log("props=", props);
  const { data: { title, rate, image } } = props;
  return (
    <div>
      <Image src={image} alt={title} />
      <p>{title}</p>
      <p>{rate}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
