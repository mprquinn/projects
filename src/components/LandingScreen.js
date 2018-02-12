import React, { Component } from "react";
import "../styles/landing.css";

class LandingScreen extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="landing">
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        <ul className="landing__nav">
          <li className="landing__nav__item landing__nav__item--active">
            <a
              href="landing"
              onClick={e => {
                e.preventDefault();
                this.props.navigate(e);
              }}
            >
              Landing
            </a>
          </li>
          <li className="landing__nav__item">
            <a
              href="projects"
              onClick={e => {
                e.preventDefault();
                this.props.navigate(e);
              }}
            >
              Projects
            </a>
          </li>
          <li className="landing__nav__item">
            <a href="">Item 3</a>
          </li>
        </ul>

        <h1 className="landing__section">.01</h1>

        <div className="landing__card">
          <div className="landing__card__image-wrap">
            <img
              src={require("../intro-bg.jpg")}
              className="landing__card__image"
            />
          </div>

          <div className="landing__card__text">
            <h1 className="landing__card__title">Slide Title</h1>
            <h2 className="landing__card__subtitle">Subtitle</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingScreen;
