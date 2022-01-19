import React, { Component } from "react";
import logo from "./Logo.png";
import "./Navbar.css";
import icon from "./netflix_icon.jpg";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
    };
    this.scrolling = this.scrolling.bind(this);
    this.isVisible = this.isVisible.bind(this);
  }
  componentDidMount() {
    this.scrolling();
  }

  isVisible() {
    if (window.scrollY >= 100 && this.state.scrolling === false) {
      //   console.log("up");
      this.setState({
        scrolling: true,
      });
    } else if (window.scrollY < 100 && this.state.scrolling === true) {
      //   console.log("down");
      this.setState({
        scrolling: false,
      });
    }
  }
  scrolling() {
    window.addEventListener("scroll", this.isVisible);
  }
  render() {
    return (
      <div className={`nav ${this.state.scrolling ? "nav-visible" : ""}`}>
        <img src={logo} className="nav-logo" />
        <img src={icon} className="nav-icon" />
      </div>
    );
  }
}
