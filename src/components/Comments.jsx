import React, { useState } from "react";
import { useEffect } from "react";
import { postCommentData, createComment } from "../CommentsSeedData";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { postData } from "../PostSeedData";

const Comments = ({ currentUserId }) => {
  const [seedComments, setSeedComments] = useState([]);
  const [activeComment, setActiveCommment] = useState(null);

  const rootComment = seedComments.filter(
    (seedComments) =>
      seedComments.PostUUID === 5 && seedComments.postCommentID === 1
    /* &&
      seedComments.PostUUID === postData.PostUUID */
  );
  /* console.log("seedComments", seedComments); */
  console.log("rootComment", rootComment);
  /*console.log("postData", postData); */

  const getReplies = (commentId) => {
    return seedComments
      .filter((seedComments) => seedComments.postCommentID === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const addComment = (comment, postCommentID) => {
    console.log("addComment", comment, postCommentID);
    createComment(comment, postCommentID).then((text) => {
      setSeedComments([text, ...seedComments]);
      setActiveCommment(null);
    });
  };

  useEffect(() => {
    postCommentData().then((data) => {
      setSeedComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <div className="comments-container">
        {rootComment.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            activeComment={activeComment}
            setActiveCommment={activeComment}
            addComment={addComment}
          />
        ))}
      </div>
      <CommentInput submitLabel="Write" handleSubmit="addComment" />
    </div>
  );
};

export default Comments;
