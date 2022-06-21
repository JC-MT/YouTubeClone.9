import React, { Component } from 'react';

export default class Comment extends Component {
  constructor() {
    super();
    this.state = { name: '', comment: '' };
  }
  handleCommenter = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleComment = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  addToShow = (event) => {
    event.preventDefault();
    let section = document.createElement('p');
    section.textContent = `${this.state.name} says: ${this.state.comment}`;
    document.querySelector('div.section').append(section);
    this.setState({ comment: '', name: '' });
  };
  render() {
    const { name, comment } = this.state;
    return (
      <div className="comment-form">
        <hr></hr>
        <form onSubmit={this.addToShow}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name..."
            value={name}
            onChange={this.handleCommenter}
          />
          <label>Comment</label>
          <br></br>
          <input
            type="text"
            name="comment"
            placeholder="..."
            value={comment}
            onChange={this.handleComment}
          />
          <div className="section">
            <button>Submit</button>
          </div>
        </form>
        <hr></hr>
      </div>
    );
  }
}