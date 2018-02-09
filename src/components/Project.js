import React, { Component } from 'react';

class Project extends Component {
  constructor() {
    super();

    this.state = {
      image: ''
    }
  }
  componentDidMount() {
    this.setState({
      image: this.props.image
    });
  }
  render() {
    return (
      <div className="project">
        <div className="project__image-wrap">

          <img src={`//unsplash.it/500/500?image=${this.props.image}`} alt="" className={`project__image project__image${this.props.image}`} />
        </div>
        <div className="project__details">
          <h1 className="project__title">{this.props.title}</h1>
          <div className="project__description">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
