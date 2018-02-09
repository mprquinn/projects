import React, { Component } from 'react';
import Project from './components/Project';
import './styles/project.css';

class App extends Component {
  render() {
    return (
      <div className="projects">
        <Project title={`Project One`}/>
      </div>
    );
  }
}

export default App;
