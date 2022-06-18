import { Component } from 'react';
import './Home.css';
import './ModalWindow';
import ModalWindow from './ModalWindow';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      videos: [],
      status: 0,
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

  handleError = (error) => {
    this.setState({
      status: error.status,
    });
    document.getElementById('myModal').style.display = 'block';
  };

  submitSearch = () => {
    const KEY = 'AIzaSyAU7H-NaZXo_guClScGPYJ28KsSej7cd28';
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.search}=video&key=${KEY}`
    )
      .then((response) => {
        if (response.status === 200) {
          this.setState({ search: '' });
          return response.json();
        } else {
          this.handleError(response);
        }
      })
      .then(this.displaysVideos)
      .catch(console.log);
  };

  render() {
    const results = this.state.videos.map((video) => {
      const { snippet, id } = video;
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
        {this.state.videos.length ? (
          results
        ) : (
          <p id="no-search">
            No Search Results Yet! Please submit a search above!
          </p>
        )}
        {/* <!-- The Modal --> */}
        <ModalWindow />
      </div>
    );
  }
}

export default Home;
