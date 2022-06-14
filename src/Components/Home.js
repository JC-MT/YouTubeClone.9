import { Component } from 'react';


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
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.search}=video&key=${KEY}`)
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
