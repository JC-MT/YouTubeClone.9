import React, { Component } from "react";

export default class Comment extends Component {
  constructor() {
    super();
    this.state = { name: "", comment: "" };
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
    let section = document.createElement("p");
    section.textContent = `${this.state.name} says: ${this.state.comment}`;
    document.querySelector("div.section").append(section);
    this.setState({ comment: "", name: "" });
  };
  render() {
    const { name, comment } = this.state;
    return (
      <div className="comment-form">
        Name
        <form onSubmit={this.addToShow}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleCommenter}
            />
          </label>
          <br />
          <label>
            Comment
            <input
              type="text"
              name="comment"
              value={comment}
              onChange={this.handleComment}
            />
          </label>
          <br />
          <div className="section">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
