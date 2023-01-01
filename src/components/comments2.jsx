import React, { useState } from "react";
import { postCommentData } from "../commentsSeedData";
import { userData } from "../userData";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");
  const [selectedComment, setSelectedComment] = useState(null);

  function handleReplySubmit(event, commentId) {
    event.preventDefault();
    const newReply = event.target.elements.reply.value;
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        return comment;
      })
    );
  }

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // Add the new comment to the list of comments
    setComments([...comments, newComment]);
    // Clear the input field
    setNewComment("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleCommentSubmit}>
          <input value={newComment} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.text}</p>
              <p>By: {comment.author}</p>
              <form onSubmit={(event) => handleReplySubmit(event, comment.id)}>
                <input name="reply" />
                <button type="submit">Submit</button>
              </form>
              {comment.replies.length > 0 && (
                <ul>
                  {comment.replies.map((reply) => (
                    <li key={reply}>{reply}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;

{
  /* 
      <ul>
        {comments.map((postCommentData) => (
          <li key={postCommentData.postCommentID}>
            <p>{postCommentData.comment}</p>
            <p>
              By:{" "}
              {postCommentData.userId == userData.Id ? userData.user : "error"}
            </p>
            <form
              onSubmit={(event) =>
                handleReplySubmit(event, postCommentData.postCommentID)
              }
            >
              <input name="reply" />
              <button type="submit">Submit</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}; */
}
