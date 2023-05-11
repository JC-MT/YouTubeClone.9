import './App.css';
import { Component, ReactElement } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Show from './Components/Show';
import NotFound from './Components/NotFound';
import { Route, Routes } from 'react-router-dom';

type State = {
  videos: Array<Object>,
  loadingActive: Boolean,
};

class App extends Component<State>{
  constructor(props: State) {
    super(props);
    this.state = {
      videos: [],
      loadingActive: false,
    };
  }

  currentVideos = (videos: Object) => {
    const { items }: any = videos;
    this.setState({
      videos: [...items],
      loadingActive: false,
    });
  };

  loadingActive = (triggered: Boolean) => {
    this.setState({
      loadingActive: triggered,
      videos: [],
    });
  };

  render() {
    const spinner: ReactElement<any, any> = (
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
  }
}

export default App;
