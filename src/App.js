import React, { Component } from 'react';
import Project from './components/Project';
import './styles/project.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loaded: 'loading',
      projects: [
        {
          title: 'Project One',
          imageUrl: 76,
          description: 'This is the first project and it has a cool description.'
        },
        {
          title: 'Project Two',
          imageUrl: 94,
          description: 'This is the second project. It has a different project.'
        }
      ],
      currentSlide: 0
    }
  }
  changeSlide(dir) {
    console.log(dir);
    const currentSlide = this.state.currentSlide;
    const projects = this.state.projects;
    if (dir === 'down') {
      if (currentSlide < projects.length-1) {
        this.setState({
          currentSlide: currentSlide+1
        });
      }
    } else {
      if (currentSlide >  0) {
        this.setState({
          currentSlide: currentSlide-1
        });
      }
    }
  }
  determineDir(delta) {
    if (delta > 0) {
      return 'down';
    } else {
      return 'up';
    }
  }
  loadImages() {
    const projects = this.state.projects;
    const baseUrl = '//unsplash.it/500x500?image=';
    projects.forEach((project, i) => {
      let image = new Image();
      const url = `${baseUrl}${project.imageUrl}`;
      image.src = url;
      if (i === projects.length - 1) {
        this.setState({
          loaded: 'loaded'
        });
      }
    });
  }
  componentWillMount() {
    this.loadImages();
  }
  componentDidMount() {
    document.addEventListener('mousewheel', (e) => {
      this.changeSlide(this.determineDir(e.deltaY));
    });
  }
  render() {
    const currSlide = this.state.projects[this.state.currentSlide];
    return (
      <div className={`projects projects--${this.state.loaded}`} style={{backgroundImage: `url(https://unsplash.it/500x500?image=${currSlide.imageUrl})` }}>
        <Project title={currSlide.title} image={currSlide.imageUrl} description={currSlide.description} />
      </div>
    );
  }
}

export default App;
