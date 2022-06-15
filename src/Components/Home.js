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
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.search}=video&key=${KEY}`
    )
      .then((response) => {
        this.setState({ search: '' });
        return response.json();
      })
      .then(this.displaysVideos)
      .catch(console.log);
  };

  render() {
    console.log(this.state);
    const results = this.state.videos.map((video) => {
      return (
        <>
          <img src={video.snippet.thumbnails.high.url} />
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </>
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
        ></input>
        <button onClick={this.submitSearch}>Search</button>
        <div>{results}</div>
      </div>
    );
  }
}

export default Home;
