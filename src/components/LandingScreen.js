import React, { Component } from "react";
import "../styles/landing.css";

class LandingScreen extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    //im sure this can be done better
    this.setState({
      loaded: true,
    });
  }
  render() {
    return (
      <div className={this.state.loaded ? `landing landing--loaded` : 'landing'}>
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
