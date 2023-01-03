import React from "react";
import { userData } from "../../userData";
import Avatar from "@mui/material/Avatar";
import CommentInput from "./CommentInput";

const Comment = ({
  comment,
  /* replies, */
  currentUserId,
  /* activeComment,
  setActiveComment, */
  postCommentID = 1,
  /* addComment, */
}) => {
  const canReply = Boolean(currentUserId);
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  /*  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.postCommentID;

  const replyId = postCommentID ? postCommentID : comment.id; */

  return (
    <div key={comment.id} className="comment">
      <div className=" comment-image-container">
        <Avatar
          src={comment.userId == userData.userId ? "error" : userData.imgURL}
        />
      </div>
      <div className="comment-right-part">
        <div className="comment-contect">
          <div className="comment-author">{comment.user}</div>
          <div>{createdAt}</div>
        </div>
        <div className="comment-text">{comment.comment}</div>
        <div className="comment-actions">
          {/*  {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({
                  id: comment.id,
                  type: "replying",
                })
              }
            >
              Reply
            </div>
          )}
        </div>
        {isReplying && (
          <CommentInput
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}

        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={comment.replies}
                currentUserId={currentUserId}
                addComment={addComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                postCommentID={comment.id}
              />
            ))}
          </div>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default Comment;
