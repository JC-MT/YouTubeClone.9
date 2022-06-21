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
  }

  updateSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleError = (error) => {
    console.log(error);
    this.props.loadingActive(false);
    document.getElementById('myModal').style.display = 'block';
  };

  submitSearch = () => {
    this.props.loadingActive(true);
    const KEY = 'AIzaSyBtYNZDf3EsFIMB_ANFZHzdirKnX_GWMs0';
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
    const { currentVideos, searching } = this.props;

    const results = currentVideos.map((video) => {
      const { snippet } = video;
      const { videoId } = video.id;

      return (
        <div key={videoId}>
          <Link to={`/videos/${videoId}`}>
            <img
              id={videoId}
              src={`${snippet.thumbnails.high.url}`}
              alt="video thumbnail"
            />
          </Link>
          <h4>{snippet.title}</h4>
        </div>
      );
    });

    return (
      <div>
        <h1>Home</h1>
        <input
          onChange={this.updateSearch}
          onKeyPress={(baseEvent) => {
            if (baseEvent.key === 'Enter') {
              this.submitSearch();
            }
          }}
          value={this.state.search}
          placeholder="Search…"
          type="text"
        />
        <button onClick={this.submitSearch}>Search</button>
        {currentVideos.length > 0 || searching ? (
          <div className="video-grid">{results}</div>
        ) : (
          <p id="no-search">
            No search results yet! Please submit a search above!
          </p>
        )}
        {/* <!-- The Modal --> */}
        <ModalWindow />
      </div>
    );
  }
}

export default Home;
