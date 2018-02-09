import React, { Component } from 'react';

class Project extends Component {
  componentDidMount() {
    
  }
  render() {
    let classes = [
      'project',
    ];
    if (this.props.animating) {
      classes.push(`project--animated project--${this.props.animClass}`)
    } else {
      classes = [
        'project'
      ];
    }
    return (
      <div className={classes.join(' ')}>
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
