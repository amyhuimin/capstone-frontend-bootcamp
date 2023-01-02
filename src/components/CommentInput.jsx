import React, { useState } from "react";

const CommentInput = ({ handleInputSubmit, submitLabel }) => {
  const [newComment, setNewComment] = useState("");
  const isTextareaDisabled = newComment.length === 0;
  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleInputSubmit(newComment);
    setNewComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="comment-form-textarea"
        value={newComment}
        onChange={handleChange}
        placeholder="add a comment"
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
    </form>
  );
};

export default CommentInput;

/* const CommentInput = () => {
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

export default CommentInput;
 */
