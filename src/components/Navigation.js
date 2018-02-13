import React, { Component } from "react";
import "../styles/navigation.css";

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      activeOffset: {
        width: "78.3",
        left: "0"
      }
    };
  }
  setActive(e) {
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
    const leftOffset = document
      .querySelector(".nav__item--active a")
      .getBoundingClientRect().x;
    this.setState({
      activeOffset: {
        left: leftOffset
      }
    });
  }
  render() {
    return (
      <ul className="nav">
        <span
          className="nav__decorative"
          style={{
            left: `${this.state.activeOffset.left}px`,
            width: `${this.state.activeOffset.width}px`
          }}
        />
        <li className="nav__item nav__item--active">
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
        <li className="nav__item">
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
        <li className="nav__item">
          <a
            href="projects"
            onClick={e => {
              e.preventDefault();
              this.setActive(e);
              this.props.navigate(e);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
