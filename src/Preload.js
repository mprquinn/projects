const App = require('./App')
const LoadingScreen = require('./LoadingScreen')
const preloadImage = url => new Promise((resolve) => { 
  const img = new Image()
  img.addEventListener('load', resolve)
  img.src = url
})
const loadImages = urls => Promise.all(urls.map(preloadImages))

class Preloader extends React.Component {
  constructor(props) {
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