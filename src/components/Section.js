import React, { Component } from "react";
import "../styles/section.css";

class Section extends Component {
  constructor() {
    super();
  }
  render() {
    return <h1 class="section">{this.props.text}</h1>;
  }
}

export default Section;
