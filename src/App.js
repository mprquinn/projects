import React, { Component } from "react";
import LandingScreen from './components/LandingScreen';
import Projects from  './components/Projects';
import "./styles/site-wrap.css";
import "./styles/reset.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loaded: "loaded",
      currentPage: 'landing',
      pageAnimation: ''
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
    return (
      <div className={`site-wrap ${this.state.pageAnimation} site-wrap--${this.state.currentPage}`}>
        <LandingScreen navigate={(e) => {
          this.navigate(e);
          }
        }/>
        <Projects />
      </div>
    );
  }
}

export default App;
