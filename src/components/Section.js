import React, { Component } from "react";
import charming from "charming";
import "../styles/section.css";

class Section extends Component {
  componentDidUpdate() {
    console.log('component updated');
    const title = document.querySelector(".section");
    charming(title);
  }
  render() {
    return <h1 className="section">{this.props.text}</h1>;
  }
}

export default Section;
