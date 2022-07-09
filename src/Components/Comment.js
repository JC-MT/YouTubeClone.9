import { useState } from "react";
import useFirebase from "../Hooks/useFirebase";
import "./Comment.css";

export default function Comment({videoId}){
  const [commentDraft, setCommentDraft] = useState({
    name: "",
    comment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCommentDraft({...commentDraft, [name]: value });
  };

  const [ comments, postComment] = useFirebase(videoId)
  const addComment = (event) => {
    event.preventDefault();
    if (commentDraft.name && commentDraft.comment) {
      postComment(commentDraft.name, commentDraft.comment)
      setCommentDraft({name: "", comment: ""})
    } else {
      alert("Missing text fields");
    }
  };

    return (
      <div>
        <hr></hr>
        <div className="comment-form">
          <form onSubmit={addComment}>
            <label id='nameLabel'>Name</label>
            <br />
            <input
              id="nameInput"
              type="text"
              name="name"
              placeholder="Name..."
              value={commentDraft.name}
              onChange={handleChange}
            />
            <br />
            <label id="commentLabel">Comment</label>
            <br />
            <input
              id="commentInput"
              type="text"
              name="comment"
              placeholder="..."
              value={commentDraft.comment}
              onChange={handleChange}
            />
            <br />
            <div className="section">
              <button id="btn">Submit</button>
              <hr id="smaller-line"></hr>
            </div>
          </form>
          {comments.map((comment, idx) => {
            return (
              <div className="comments" key={idx}>
                <h3>
                  {comment.author}
                </h3>
                <p>{comment.comment}</p>
              </div>);
          })}
        </div>
      </div>
    );
  }
