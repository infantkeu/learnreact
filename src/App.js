import React from "react";
import "./styles.css";
import { movieData } from "./MovieList";
import MovieItem from "./MovieItem";

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

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    });
  };

  render() {
    return (
      <div>
        {this.state.movies.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
