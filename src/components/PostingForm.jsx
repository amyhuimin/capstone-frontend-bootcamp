import React, { useState } from "react";
import PostTextInput from "./PostTextInput";
import PostUploadPhotoVideo from "./PostUploadPhotoVideo";
import PostRequestList from "./PostRequestList";
import PostIdeaList from "./PostIdeaList";
import "./cssFiles/Posting.css";
import ReactPlayer from "react-player/lazy";
import PostTag from "./PostTag";

const PostingForm = (props) => {
  return (
    <div className="postForm">
      <div className="postFormTopInput">
        <div>
          <PostRequestList
            inputText={props.inputText}
            handleTextChange={props.handleTextChange}
            inputRequest={props.inputRequest}
            handleRequestChange={props.handleRequestChange}
            inputIdea={props.inputIdea}
            handleIdeaChange={props.handleIdeaChange}
            inputUpload={props.inputUpload}
            handleUploadChange={props.handleUploadChange}
          />
        </div>
        <div>
          <PostIdeaList
            inputText={props.inputText}
            handleTextChange={props.handleTextChange}
            inputRequest={props.inputRequest}
            handleRequestChange={props.handleRequestChange}
            inputIdea={props.inputIdea}
            handleIdeaChange={props.handleIdeaChange}
            inputUpload={props.inputUpload}
            handleUploadChange={props.handleUploadChange}
          />
        </div>
      </div>
      <div>
        <PostTextInput
          inputText={props.inputText}
          handleTextChange={props.handleTextChange}
          inputRequest={props.inputRequest}
          handleRequestChange={props.handleRequestChange}
          inputIdea={props.inputIdea}
          handleIdeaChange={props.handleIdeaChange}
          inputUpload={props.inputUpload}
          handleUploadChange={props.handleUploadChange}
        />
      </div>
      <div>
        <PostTag />
        <PostTag />
        <PostTag />
      </div>
      <div>
        <PostUploadPhotoVideo
          inputText={props.inputText}
          handleTextChange={props.handleTextChange}
          inputRequest={props.inputRequest}
          handleRequestChange={props.handleRequestChange}
          inputIdea={props.inputIdea}
          handleIdeaChange={props.handleIdeaChange}
          inputUpload={props.inputUpload}
          handleUploadChange={props.handleUploadChange}
        />
        {props.inputUpload.videoURL ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ReactPlayer
              url={props.inputUpload.videoURL}
              style={{
                paddingLeft: "5%",
                paddingRight: "5%",
              }}
              config={{
                youtube: {
                  playerVars: { controls: 1 },
                },
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PostingForm;
