import React, { Component } from "react";
import App from './App';
import LoadingScreen from './components/LoadingScreen';

const preloadImages = url => new Promise((resolve) => { 
  const img = new Image();
  img.addEventListener('load', resolve);
  img.src = url;
  console.log(img);
})
const loadImages = urls => Promise.all(urls.map(preloadImages))

class Preload extends React.Component {
  constructor(props) {
    super();

    this.urls = props.urls
    this.state = { loaded: false }
  }
  componentDidMount() {
    loadImages(this.urls).then(() => this.setState({ loaded: true }))
  }
  render() {
    return this.state.loaded
      ? <App />
      : <LoadingScreen />
  }
}

export default Preload