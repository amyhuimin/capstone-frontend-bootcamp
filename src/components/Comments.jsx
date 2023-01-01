import { Avatar } from "@mui/material";
import React, { useState } from "react";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the new comment to the list of comments
    setComments([...comments, newComment]);
    // Clear the input field
    setNewComment("");
  };

  return (
    <div>
      {comments.map((comment) => (
        <p>{comment}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          <Avatar></Avatar>
          <input
            type="text"
            value={newComment}
            onChange={handleChange}
            placeholder="add a comment"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentsSection;
