import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { movies } from "./MovieList";

//import App from "./App";

{
  /*const movie = {
  title: "Avarage",
  rate: "10.1",
  image:
    "https://uploads.codesandbox.io/uploads/user/5f703e8f-97ef-4847-a9eb-2fa75408766c/p3t1-average.jpg    ",
  overview: "Описание фильма!!!!"
}; */
}

function Image(props) {
  //  console.log("Image props", props);
  return <img src={props.src} alt={props.alt} width="100%" />;
}

//function MovieItem (props) {
//  console.log("props=", props);
//  const { data: { title, rate, image } } = props;
//  return (
//    <div>
//      <Image src={image} alt={title} />
//      <p>{title}</p>
//      <p>{rate}</p>
//    </div>
//  );
//}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false,
      mvs: movies
    };
  }

  toggleOverview = () => {
    console.log("show");
    this.setState({ show: !this.state.show });
  };

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    console.log(this.state);

    const {
      data: { title, rate, image, overview }
    } = this.props;
    return (
      <div>
        {" "}
        {this.state.mvs.map(function (mvs) {
          return <p>{mvs.title}</p>;
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movies[0]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
