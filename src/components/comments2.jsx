import React, { useState } from "react";
import postCommentData from "../CommentsSeedData";
import userData from "../userData";

const CommentsSection = ({ content }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function handleReplySubmit(event, commentId) {
    event.preventDefault();
    const newReply = event.target.elements.reply.value;
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (postCommentData.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        return comment;
      })
    );
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={postCommentData.postCommentid}>
          <p>{postCommentData.comment}</p>
          <p>
            By:{" "}
            {postCommentData.userId == userData.Id ? userData.user : "error"}
          </p>
          <form onSubmit={(event) => handleReplySubmit(event, comment.id)}>
            <input name="reply" />
            <button type="submit">Submit</button>
          </form>
        </li>
      ))}
    </ul>
  );
};

export default CommentsSection;
