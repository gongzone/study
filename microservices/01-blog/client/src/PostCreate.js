import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const changeInputHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://posts.com/posts/create", {
      title: title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
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

export default PostCreate;
