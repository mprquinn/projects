import React, { Component } from "react";
import Project from "./Project";
import Lines from "./Lines";
import "../styles/project.css";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      loaded: "loaded",
      animating: false,
      animateDir: "",
      animateDuration: 600,
      currentSlide: 0,
      projects: [
        {
          title: "Project One",
          imageUrl: "project1.jpg",
          description: "Donec sodales, justo id condimentum facilisis, magna sapien volutpat nisl, non posuere tortor enim ut justo. Mauris id dolor et enim efficitur ultrices. Mauris ornare, turpis vitae placerat facilisis, lectus libero fermentum nibh, sed gravida sapien risus quis magna. Phasellus non blandit nunc. Cras et elit eu orci accumsan sollicitudin a a risus. Maecenas ipsum ex, pharetra at lacinia quis, eleifend et ligula. Suspendisse placerat arcu vel ipsum malesuada, at fermentum mauris posuere. Donec laoreet purus vitae turpis facilisis porta. Sed porta dictum augue sed feugiat. Morbi vitae semper nunc, in consequat nisl. Suspendisse potenti. Duis ac lacus gravida, eleifend ex quis, sollicitudin arcu. Vestibulum orci risus, aliquet ac efficitur non, venenatis vitae ex. Phasellus porta tempus massa eget sagittis. Vivamus justo leo, pulvinar id tempus eu, consequat in massa. Duis laoreet enim quis ultrices pharetra."
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
      ]
    };
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
    document.addEventListener("mousewheel", e => {
      if (!this.state.animating) {
        this.changeSlide(this.determineDir(e.deltaY));
      }
    });
  }
  render() {
    const currSlide = this.state.projects[this.state.currentSlide];
    const currentImage = require(`../${currSlide.imageUrl}`);
    return (
      <div className={`projects projects--${this.state.loaded}`}>
        <Lines />
        <Project
          title={currSlide.title}
          image={currSlide.imageUrl}
          description={currSlide.description}
          animClass={this.state.animateDir}
          animating={this.state.animating}
        />
      </div>
    );
  }
}

export default Projects;
