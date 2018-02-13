import React, { Component } from "react";
import arrow from '../arrow.png';

class Project extends Component {
  componentDidMount() {}
  render() {
    let classes = ["project"];
    if (this.props.animating) {
      classes.push(`project--animated project--${this.props.animClass}`);
    } else {
      classes = ["project"];
    }
    return (
      <div className={classes.join(" ")}>
        <div className="project__image-wrap">
          <img
            src={require(`../${this.props.image}`)}
            alt=""
            className={`project__image project__image${this.props.image}`}
          />
        </div>
        <div className="project__details">
          <h1 className="project__title">{this.props.title}</h1>
          <div className="project__description">{this.props.description}</div>
        </div>
        <div className="project__nav">
          <span
            className="project__nav__arrow project__nav__arrow--left"
            onClick={e => this.props.changeSlide("up")}
          >
            <img src={arrow} alt="" />
          </span>
          <span
            className="project__nav__arrow project__nav__arrow--right"
            onClick={e => this.props.changeSlide("down")}
          >
            <img src={arrow} alt="" />
          </span>
        </div>
      </div>
    );
  }
}

export default Project;
