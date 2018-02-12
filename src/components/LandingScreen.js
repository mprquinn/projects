import React, { Component } from "react";
import '../styles/landing.css';

class LandingScreen extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="landing">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <h1 className="landing__section">.01</h1>

        <div className="landing__card">
          
          <div className="landing__card__image-wrap">
            <img src={require('../intro-bg.jpg')} className="landing__card__image" />
          </div>

          <div className="landing__card__text">
            <h1 className="landing__card__title">
                Mike Quinn
            </h1>
            <h2 className="landing__card__subtitle">
                Developer
            </h2>
          </div>
          
        </div>
      </div>
    );
  }
}

export default LandingScreen;