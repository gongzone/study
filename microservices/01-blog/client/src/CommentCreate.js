import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const changeInputHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content: content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={changeInputHandler}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
