import React, { Component } from "react";
import LandingScreen from './components/LandingScreen';
import Project from "./components/Project";
import "./styles/reset.css";
import "./styles/project.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loaded: "loaded",
      animating: false,
      animateDir: "",
      animateDuration: 600,
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
      currentSlide: 0,
      currentPage: 'landing',
      pageAnimation: ''
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
    const destination = e.target.getAttribute('href');
    this.setState({
      pageAnimation: 'site-wrap--animated site-wrap--out'
    })
    window.setTimeout(() => {
      this.setState({
        currentPage: destination,
        pageAnimation: 'site-wrap--animated site-wrap--in'
      });
    }, 300);
    window.setTimeout(() => {
      this.setState({
        pageAnimation: ''
      });
    }, 600);
  }
  componentWillMount() {
    // this.loadImages();
  }
  componentDidMount() {
    document.addEventListener("mousewheel", e => {
      if (!this.state.animating) {
        // this.changeSlide(this.determineDir(e.deltaY));
      }
    });
  }
  render() {
    const currSlide = this.state.projects[this.state.currentSlide];
    const currentImage = require(`./${currSlide.imageUrl}`);
    return (
      <div className={`site-wrap ${this.state.pageAnimation} site-wrap--${this.state.currentPage}`}>
        <LandingScreen navigate={(e) => {
          this.navigate(e);
          }
        }/>
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
      </div>
    );
  }
}

export default App;
