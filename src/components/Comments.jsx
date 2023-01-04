import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./cssFiles/Comment.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

const PostButton = styled(Button)({
  textTransform: "none",
  fontSize: 12,
  padding: "4px",
  lineHeight: 1.5,
  backgroundColor: "#FFCE35",
});

const CommentPaper = styled(Paper)({
  elevation: 0,
  fontSize: 12,
  lineHeight: 1.5,
  borderRadius: "17px",
  backgroundColor: "#FFCE35",
});

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
    <div className="comments">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="commentInput"
            value={newComment}
            placeholder="Write a comment..."
            onChange={(event) => setNewComment(event.target.value)}
          />
        </form>

        <Button
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          size="small"
          sx={{
            width: "100%",
            marginTop: "1%",
            paddingLeft: "5%",
            paddingTop: "1%",
            paddingBottom: "1.5%",
            justifyContent: "flex-start",
          }}
        >
          {counter} Comments
        </Button>
      </div>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            marginTop: "-1.5%",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={comments.map((comment) => (
                <CommentPaper className="commentPaper" key={comment}>
                  {comment}
                </CommentPaper>
              ))}
            />
          </ListItem>
        </List>
        {/* <ul>
          {comments.map((comment) => (
            <li key={comment}>{comment}</li>
          ))}
        </ul> */}
      </Collapse>
    </div>
  );
};

export default Comments;
