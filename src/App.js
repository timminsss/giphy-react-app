import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './components/gif.jsx'
import GifList from './components/gif_list.jsx'
import SearchBar from './components/search.jsx'

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: ''
    }
  }

search = (query) => {
  giphy('JVesoOHeuMlbqoP8Eh35GxueuJs2b9y5').search({
    q: query,
    rating: 'g',
    limit: 10
  }, (error, result) => {
      this.setState({
        gifs: result.data
      });
  });
}

selectGif = (gifId) => {
  this.setState({
    selectedGifId: gifId
  });
}

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="form-search">
            <SearchBar search={this.search}/>
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
