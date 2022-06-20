import './App.css';
import { Component } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Show from './Components/Show';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      loadingActive: false,
    };
  }

  currentVideos = (videos) => {
    const { items } = videos;
    this.setState({
      videos: [...items],
      loadingActive: false,
    });
  };

  loadingActive = (triggered) => {
    this.setState({
      loadingActive: triggered,
      videos: [],
    });
  };

  render() {
    const spinner = (
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
            element={<Show currentVideos={this.state.videos} />}
          />
        </Routes>
        {this.state.loadingActive === true ? spinner : null}
      </div>
    );
  }
}

export default App;
