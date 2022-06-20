import { Component } from 'react';
import './Home.css';
import './ModalWindow';
import ModalWindow from './ModalWindow';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    console.log(props)
  }

  updateSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleError = () => {
    this.props.loadingActive(false);
    document.getElementById('myModal').style.display = 'block';
  };

  submitSearch = () => {
    this.props.loadingActive(true);
    const KEY = 'AIzaSyAU7H-NaZXo_guClScGPYJ28KsSej7cd28';
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.search}=video&key=${KEY}`
    )
      .then((response) => {
        if (response.status === 200) {
          this.setState({ search: '' });
          return response.json();
        }
      })
      .then(this.props.getRequest)
      .catch(this.handleError);
  };

  render() {
    console.log(this.state)
    const results = this.props.currentVideos.map((video) => {
      const { snippet, id } = video;
      console.log(video)
      return (
        <div key={id.videoId}>
          <Link to={`/videos/${id.videoId}`}>
            <img src={snippet.thumbnails.high.url} alt="video thumbnail" />
            <h4>{snippet.title}</h4>
          </Link>
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
        {this.props.currentVideos.length > 0 || this.props.searching ? (
          <div className="video-grid">{results}</div>
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
