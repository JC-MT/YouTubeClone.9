import './App.css';
import { Component } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Show from './Components/Show';
import NotFound from './Components/NotFound';
import { Route, Routes } from 'react-router-dom';

type State = {
  videos: Array<Object>,
  loadingActive: Boolean
};

type Videos = {
  etag: string,
  items: Object[],
  kind: string, 
  nextPageToken: string,
  pageInfo: Object,
  regionCode: string
}

class App extends Component<{}, State> {
  override state = {
    videos: [],
    loadingActive: false,
  };

  currentVideos: Function = (videos: Videos) => {
    const { items } = videos

    this.setState({
      videos: [...items],
      loadingActive: false,
    });
  };

  loadingActive: Function = (triggered: Boolean) => {
    this.setState({
      loadingActive: triggered,
      videos: [],
    });
  };

  override render() {
    const spinner: JSX.Element = (
      <div className="spinner">
        <div className="loading" />
      </div>
    );
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                getRequest={this.currentVideos}
                currentVideos={this.state.videos}
                loadingActive={this.loadingActive}
                searching={this.state.loadingActive}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/videos/:id"
            element={<Show />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {this.state.loadingActive === true ? spinner : null}
      </div>
    );
  };
};

export default App;
