import { Component } from 'react';
import './Home.css';
import './ModalWindow';
import ModalWindow from './ModalWindow';
import { Link } from 'react-router-dom';

type PrivateProps = {
  getRequest: Function;
  currentVideos: Array<Object>;
  loadingActive: Function;
  searching: Boolean;
};

type State = {
  search: string;
};

type Video = {
  etag: string;
  id: { videoId: string };
  kind: string;
  snippet: { title: string; thumbnails: { high: { url: string } } };
};

class Home extends Component<PrivateProps, State> {
  override state = {
    search: ''
  };

  updateSearch: Function = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleError: Function = () => {
    this.props.loadingActive(false);
    const model = document.getElementById('myModal') as HTMLElement;

    if (model) {
      model.style.display = 'block';
    }
  };

  submitSearch: Function = () => {
    this.props.loadingActive(true);
    const KEY: string = 'AIzaSyBtYNZDf3EsFIMB_ANFZHzdirKnX_GWMs0';
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.search}=video&key=${KEY}`
    )
      .then((response: Response ) => {
        if (response.status === 200) {
          this.setState({ search: '' });
          return response.json() as Promise<Object>;
        } else {
          this.handleError()
          throw Error
        }
      })
      .then((res: Object) => this.props.getRequest(res))
      .catch((err: Error) => this.handleError(err));
  };

  override render() {
    const { currentVideos, searching } = this.props;

    const results: React.ReactNode = currentVideos.map((video: Object) => {
      const {
        snippet,
        id: { videoId }
      } = video as Video;

      return (
        <div key={videoId}>
          <Link to={`/videos/${videoId}`}>
            <img
              id={videoId}
              className="video-thumbnail"
              src={`${snippet.thumbnails.high.url}`}
              alt="video thumbnail"
            />
          </Link>
          <h4>{snippet.title}</h4>
        </div>
      );
    });

    return (
      <div className="home-container">
        <h1>Home</h1>
        <input
          onChange={(event: React.ChangeEvent) => this.updateSearch(event)}
          onKeyDown={(baseEvent: React.KeyboardEvent<HTMLInputElement>) => {
            if (baseEvent.key === 'Enter') {
              this.submitSearch();
            }
          }}
          value={this.state.search}
          placeholder="Search…"
          type="text"
        />
        <button onClick={() => this.submitSearch()} id="mainSearch">
          Search…
        </button>
        {currentVideos.length > 0 || searching ? (
          <div className="video-grid">{results}</div>
        ) : (
          <p id="no-search">
            No search results yet! Please submit a search above!
          </p>
        )}
        <ModalWindow />
      </div>
    );
  }
}

export default Home;
