import React, { useState } from "react";
import { useEffect } from "react";
import { postCommentData, createComment } from "../CommentsSeedData";
import Comment from "./to be reused/Comment";
import CommentInput from "./CommentInput";
import { postData } from "../PostSeedData";

const Comments = ({ currentUserId }) => {
  const [seedComments, setSeedComments] = useState([]);
  /*  const [activeComment, setActiveCommment] = useState(null); */

  /*  const rootComment = () => {
    for (var i = 0; i < postData.length; i++) {
      for (var x = 0; x < seedComments.length; x++) {
        if (seedComments[x].PostUUID === postData[i].PostUUID) {
          return (
            seedComments[x].postCommentID,
            console.log(seedComments[x].postCommentID),
            console.log(postData[i].PostUUID)
          );
        }
      }
    }
  }; */

  /* const rootComment = seedComments.filter(
    (seedComments) => seedComments.postCommentID === 1
  ); */
  const postFeed = { postData };

  const currentPost = postData.find((post) => post.id === postData.PostUUID);
  console.log("current", currentPost);
  const rootComment = seedComments.filter(
    (seedComments) => seedComments.PostUUID === currentPost.PostUUID
  );
  console.log("root", rootComment);

  const commentText = () => {
    for (var i = 0; i < rootComment.length; i++) {
      return rootComment[i].comment;
    }
  };

  /*  const getReplies = (commentId) => {
    return seedComments
      .filter((seedComments) => seedComments.postCommentID === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  }; */

  /*  const addComment = (comment, postCommentID) => {
    console.log("addComment", comment, postCommentID);
    createComment(comment, postCommentID).then((text) => {
      setSeedComments([text, ...seedComments]);
      setActiveCommment(null);
    });
  }; */

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
            /* comment={rootComment.comment} */
            comment={commentText()}
            /* replies={getReplies(rootComment.PostUUID)} */
            currentUserId={currentUserId}
            /*  activeComment={activeComment}
            setActiveCommment={activeComment} */
            /* addComment={addComment */
          />
        ))}
      </div>
      <CommentInput submitLabel="Write" handleSubmit="addComment" />
    </div>
  );
};

export default Comments;
