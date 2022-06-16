import { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      videos: [],
    };
  }

  updateSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  displaysVideos = (videos) => {
    const { items } = videos;
    this.setState({
      videos: [...items],
    });
  };

  submitSearch = () => {
    const KEY = 'AIzaSyAU7H-NaZXo_guClScGPYJ28KsSej7cd28';
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippt&maxResults=10&q=${this.state.search}=video&key=${KEY}`
    )
      .then((response) => {
        this.setState({ search: '' });
        return response.json();
      })
      .then(this.displaysVideos)
      .catch(console.log('we hit'));
  };

  render() {
    const results = this.state.videos.map((video) => {
      const { snippet, id } = video
      return (
        <div key={id.videoId}>
          <img src={snippet.thumbnails.high.url} />
          <h4>{snippet.title}</h4>
        </div>
      );
    });
    return (
      <div>
        <h1>Home</h1>
        <input
          onChange={this.updateSearch}
          value={this.state.search}
          placeholder="Search..."
          type="text"
        />
        <button onClick={this.submitSearch}>Search</button>
        {this.state.videos.length ? results : <p id='no-search'>No Search Results Yet! Please submit a search above!</p>}
      </div>
    );
  }
}


export default Home;
