import React, { Component } from "react";
import "./Banner.css";
import requests, { titleList } from "./requests";
import axios from "axios";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      bannerUrl: null,
      overview: null,
    };
  }
  async componentDidMount() {
    const num1 = Math.floor(Math.random() * requests.length);
    const num2 = Math.floor(Math.random() * requests.length);
    const result = await axios.get(requests[num1]);
    this.setState({
      overview: result.data.results[num2].overview,
      title: result.data.results[num2].title,
      bannerUrl: result.data.results[num2].backdrop_path,
    });
  }

  truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  render() {
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    if (this.state.title) {
      return (
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseUrl}${this.state.bannerUrl})`,

            backgroundPosition: "top 20%",
          }}
        >
          <div className="banner-contents">
            <h1 className="banner-title">{this.state.title}</h1>
            <div className="banner-buttons">
              <button className="banner-button">Play</button>
              <button className="banner-button">My List</button>
            </div>
            <h1 className="banner-overview">
              {this.truncateString(this.state.overview, 300)}
            </h1>
          </div>
          <div className="banner-fadeBottom" />
        </div>
      );
    }
    return <div></div>;
  }
}
