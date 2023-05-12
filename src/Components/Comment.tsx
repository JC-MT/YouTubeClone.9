import { useState } from "react";
import useFirebase from "../Hooks/useFirebase";
import "./Comment.css";

type CommentDraft = {
  name: string,
  comment: string
}

type CommentData = {
  author: string,
  comment: string
}

type CommentProp = {
  videoId: string | undefined
}

export default function Comment({videoId}: CommentProp){
  const [commentDraft, setCommentDraft]: [CommentDraft, Function] = useState({
    name: "",
    comment: "",
  });

  const handleChange: Function = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCommentDraft({...commentDraft, [name]: value });
  };

  const [ comments, postComment]: any  = useFirebase(videoId)

  const addComment: Function = (event: React.FormEvent) => {
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
          <form onSubmit={(e) => addComment(e)}>
            <label id='nameLabel'>Name</label>
            <br />
            <input
              id="nameInput"
              type="text"
              name="name"
              placeholder="Name..."
              value={commentDraft.name}
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
            <br />
            <div className="section">
              <button id="btn">Submit</button>
              <hr id="smaller-line"></hr>
            </div>
          </form>
          <div className="comments" >
          {comments instanceof Array ? comments.map((incommingComment: Object | undefined, idx: number) => {
            const { author, comment} = incommingComment as CommentData
            return (
              <div key={idx}>
                <h3>
                  {author}:
                </h3>
                <p>{comment}</p>
              </div>);
          }) : null}
          </div>
        </div>
      </div>
    );
  }
