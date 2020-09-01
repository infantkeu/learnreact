import React from "react";
import "./styles.css";
import { movieData } from "./MovieList";

class SimpleDate {
  constructor(year, month, date) {
    this.year = year;
    this.month = month;
    this.date = date;
  }
  toString() {
    return `${this.date}.${this.month}.${this.year}`;
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movieData
    };
  }

  removeMovie(movie) {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    });
  }

  render() {
    return (
      <div>
        {this.state.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <button
                type="button"
                onClick={this.removeMovie.bind(this, movie)}
              >
                Del Movie
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
