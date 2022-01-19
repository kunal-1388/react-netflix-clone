import React, { Component } from "react";
import YouTube from "react-youtube";
import { v4 as uuidv4 } from "uuid";
import "./Row.css";
import movieTrailer from "movie-trailer";
export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerId: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick(movieTitle) {
    let result = await movieTrailer(movieTitle, { id: true, multi: false });
    console.log(result);

    if (this.state.trailerId !== "") {
      this.setState({
        trailerId: "",
      });
    } else {
      this.setState({
        trailerId: result,
      });
    }
  }

  render() {
    const baseUrl = "https://image.tmdb.org/t/p/w500/";
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <div className="row">
        <h2>{this.props.title}</h2>
        <div className={`img-container `}>
          {this.props.info.map((el) => (
            <img
              src={`${baseUrl}${
                this.props.isLargeRow ? el.poster_path : el.backdrop_path
              }`}
              className={`row-poster ${
                this.props.isLargeRow ? "largeRow" : ""
              }`}
              onClick={() => this.handleClick(el.title)}
              key={uuidv4()}
            />
          ))}
        </div>
        {this.state.trailerId && (
          <YouTube videoId={`${this.state.trailerId}`} />
        )}
      </div>
    );
  }
}
