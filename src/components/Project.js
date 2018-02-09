import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="project__image-wrap">
          <img src="//unsplash.it/500/500?image=76" alt="" className="project__image" />
        </div>
        <div className="project__details">
          <h1 className="project__title">{this.props.title}</h1>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus maxime rerum atque ratione asperiores possimus fugiat cumque, minus at eligendi quibusdam, quas consectetur explicabo? Unde expedita nesciunt reiciendis nostrum doloremque?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
