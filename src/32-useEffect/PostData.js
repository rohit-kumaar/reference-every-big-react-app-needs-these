import React, { useState } from "react";
import axios from "axios";

function PostData() {
  const [post, setPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const { userId, title, body } = post;

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={changeHandler}
            />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </>
  );
}

export default PostData;
