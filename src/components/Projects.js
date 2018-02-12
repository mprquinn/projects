import React, { Component } from "react";
import Project from './Project';
import "../styles/project.css";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      animating: false,
      animateDir: "",
      animateDuration: 600,
      currentSlide: 0,
      projects: [
        {
          title: "Project One",
          imageUrl: "project1.jpg",
          description:
            "This is the first project and it has a cool description."
        },
        {
          title: "Project Two",
          imageUrl: "project2.jpg",
          description: "This is the second project. It has a different project."
        },
        {
          title: "Another Project",
          imageUrl: "project3.jpg",
          description: "Blah blah blah words go here"
        }
      ],
    }
  }
  fireAnims(duration) {
    // go
    this.setState({
      animating: true,
      animateDir: "out"
    });
    // halfway
    window.setTimeout(() => {
      this.setState({
        animateDir: "in"
      });
    }, duration / 2);
    // done
    window.setTimeout(() => {
      this.setState({
        animating: false
      });
    }, duration);
  }
  changeSlide(dir) {
    const currentSlide = this.state.currentSlide;
    const projects = this.state.projects;

    if (dir === "down") {
      if (currentSlide < projects.length - 1) {
        this.fireAnims(1200);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide + 1
          });
        }, 610);
      }
    } else {
      if (currentSlide > 0) {
        this.fireAnims(1200);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide - 1
          });
        }, 610);
      }
    }
  }
  determineDir(delta) {
    if (delta > 0) {
      return "down";
    } else {
      return "up";
    }
  }
  componentDidMount() {

  }
  render() {
    const currSlide = this.state.projects[this.state.currentSlide];
    const currentImage = require(`../${currSlide.imageUrl}`);
    return (
      <div
          className={`projects projects--${this.state.loaded}`}
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <Project
            title={currSlide.title}
            image={currSlide.imageUrl}
            description={currSlide.description}
            animClass={this.state.animateDir}
            animating={this.state.animating}
          />
        </div>
    )
  }
}

export default Projects;