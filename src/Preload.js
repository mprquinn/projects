import React, { Component } from "react";
import LoadingScreen from './components/LoadingScreen';
import App from './App';

const preloadImages = url => new Promise((resolve) => { 
  const img = new Image()
  img.addEventListener('load', resolve)
  img.src = url
})
const loadImages = urls => Promise.all(urls.map(preloadImages))

class Preloader extends React.Component {
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

module.exports = Preloader