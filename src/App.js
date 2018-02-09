import React, { Component } from 'react';
import Project from './components/Project';
import './styles/project.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
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
  componentDidMount() {
    document.addEventListener('mousewheel', (e) => {
      this.changeSlide(this.determineDir(e.deltaY));
    });
  }
  render() {
    const currSlide = this.state.projects[this.state.currentSlide];
    return (
      <div className="projects">
        <Project title={currSlide.title} image={currSlide.imageUrl} description={currSlide.description} />
      </div>
    );
  }
}

export default App;
