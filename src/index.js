import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

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

    return (
      <div>
        {this.state.mvs.map(function (mvs) {
          return <p>{mvs.title}</p>;
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
