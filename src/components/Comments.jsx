import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }

  let counter = 0;
  for (let i = 0; i < comments.length; i++) {
    counter++;
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

      <Button
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        View {counter} Comments
      </Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ul>
          {comments.map((comment) => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default Comments;
