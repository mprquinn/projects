import React, { Component } from "react";
import "../styles/landing.css";

class LandingScreen extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      activeOffset: {
        width: '78.3',
        left: '0'
      }
    };
  }
  setActive(e) {
    console.log(e.target);
    const width = e.target.getBoundingClientRect().width;
    const left = e.target.getBoundingClientRect().x;
    this.setState({
      activeOffset: {
        width,
        left
      }
    });
  }
  componentDidMount() {
    //im sure this can be done better
    const leftOffset = document.querySelector('.landing__nav__item--active a').getBoundingClientRect().x;
    this.setState({
      loaded: true,
      activeOffset: {
        left: leftOffset
      }
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

        <ul className="landing__nav">
          <span className="landing__nav__decorative" style={{left: `${this.state.activeOffset.left}px`, width: `${this.state.activeOffset.width}px`}}></span>
          <li className="landing__nav__item landing__nav__item--active">
            <a
              href="landing"
              onClick={e => {
                e.preventDefault();
                this.setActive(e);
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
                this.setActive(e);
                this.props.navigate(e);
              }}
            >
              Projects
            </a>
          </li>
          <li className="landing__nav__item">
          <a
              href="projects"
              onClick={e => {
                e.preventDefault();
                this.setActive(e);
                this.props.navigate(e);
              }}
            >Contact</a>
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
