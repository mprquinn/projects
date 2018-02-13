import React, { Component } from "react";
import LandingScreen from "./components/LandingScreen";
import Section from "./components/Section";
import Lines from "./components/Lines";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import charming from "charming";
import "./styles/site-wrap.css";
import "./styles/reset.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      currentSection: "landing",
      pageAnimation: "",
      sectionTitles: {
        landing: "Hello,",
        projects: "Projects"
      }
    };
  }
  loadImages() {
    const projects = this.state.projects;
    const baseUrl = "//unsplash.it/500x500?image=";
    projects.forEach((project, i) => {
      let image = new Image();
      const url = `${baseUrl}${project.imageUrl}`;
      image.src = url;
      if (i === projects.length - 1) {
        // this.setState({
        //   loaded: 'loaded'
        // });
      }
    });
  }
  navigate(e) {
    const destination = e.target.getAttribute("href");
    this.setState({
      pageAnimation: "site-wrap--animated site-wrap--out"
    });
    window.setTimeout(() => {
      this.setState({
        currentSection: destination,
        pageAnimation: "site-wrap--animated site-wrap--in"
      });
    }, 600);
    window.setTimeout(() => {
      this.setState({
        pageAnimation: ""
      });
    }, 1200);
  }

  animateTitle() {
    const title = document.querySelector("h1.section");
    charming(title);
  }
  componentWillMount() {}
  animateTitle() {
    const title = document.querySelector(".section");
    charming(title);
  }
  componentDidMount() {
    this.setState({
      loaded: true
    });
  }
  renderSection(section) {
    if (section === "landing") {
      return <LandingScreen />;
    } else if (section === "projects") {
      return <Projects />;
    }
  }
  render() {
    return (
      <div
        className={`site-wrap ${this.state.pageAnimation} site-wrap--${
          this.state.currentSection
        }`}
      >
        <Lines />
        <Navigation
          navigate={e => {
            this.navigate(e);
          }}
          animateTitle={e => {
            this.animateTitle();
          }}
        />
        <Section text={this.state.sectionTitles[this.state.currentSection]} />

        <div
          className={
            this.state.loaded
              ? `site-wrap__viewport site-wrap__viewport--loaded`
              : `site-wrap__viewport`
          }
        >
          {this.renderSection(this.state.currentSection)}
        </div>
      </div>
    );
  }
}

export default App;
