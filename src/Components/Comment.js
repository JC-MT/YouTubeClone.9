import React, { Component } from "react";
import "./Comment.css";


export default class Comment extends Component {
  constructor() {
    super();
    this.state = { name: "", comment: "", listOfComment: [] };

  }
  handleCommenter = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleComment = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };
  // REFACTOR COMMENT SECTION
  addToShow = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.comment) {
      let foo = `${this.state.name} ${this.state.comment}`;
      this.setState({ listOfComment: [...this.state.listOfComment, foo] });
    } else {
      alert("Missing text fields");
    }
  };
  render() {
    const { name, comment } = this.state;
    return (
      <div>
        <hr></hr>
        <div className="comment-form">
          <form onSubmit={this.addToShow}>
            <label id='nameLabel'>Name</label>
            <br />
            <input
              id="nameInput"
              type="text"
              name="name"
              placeholder="Name..."
              value={name}
              onChange={this.handleCommenter}
            />
            <br />
            <label id="commentLabel">Comment</label>
            <br />
            <input
              id="commentInput"
              type="text"
              name="comment"
              placeholder="..."
              value={comment}
              onChange={this.handleComment}
            />
            <br />
            <div className="section">
              <button id="btn">Submit</button>
            </div>
          </form>
          {this.state.listOfComment.map((comment) => {
            return <p className="comment">{comment}</p>;
          })}
          <hr></hr>
        </div>
      </div>
    );
  }
}
