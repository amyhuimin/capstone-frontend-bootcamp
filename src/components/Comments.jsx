import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
