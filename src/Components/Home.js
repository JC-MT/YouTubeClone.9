import { Component } from 'react';
import './Home.css'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch = (event) => {
    const { value } = event.target 
    this.setState({ search: value })
  }

  submitSearch = () => {
    const KEY = 'AIzaSyAU7H-NaZXo_guClScGPYJ28KsSej7cd28'
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.search}=video&key=${KEY}`)
    .then((response) => {
        console.log(this.state.search)
        this.setState({ search: '' })
        return response.json();
      })
      .then(console.log)
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <input onChange={this.updateSearch} value={this.state.search} placeholder="Search..." type="text"></input>
        <button onClick={this.submitSearch}>Search</button>
      </div>
    );
  }
}

export default Home;
