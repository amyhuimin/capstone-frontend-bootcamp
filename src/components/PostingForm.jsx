import React, { useState } from "react";
import PostTextInput from "./PostTextInput";
import PostUploadPhotoVideo from "./PostUploadPhotoVideo";
import PostRequestList from "./PostRequestList";
import PostIdeaList from "./PostIdeaList";
import "./cssFiles/Posting.css";
import ReactPlayer from "react-player/lazy";
import PostTag1 from "./PostTag1";
import PostTag2 from "./PostTag2";
import PostTag3 from "./PostTag3";

const PostingForm = (props) => {
  return (
    <div className="postForm">
      <div className="postFormTopInput">
        <div>
          <PostRequestList
            /*             inputText={props.inputText}
            handleTextChange={props.handleTextChange} */
            inputRequest={props.inputRequest}
            handleRequestChange={props.handleRequestChange}
            /*             inputIdea={props.inputIdea}
            handleIdeaChange={props.handleIdeaChange}
            inputUpload={props.inputUpload}
            handleUploadChange={props.handleUploadChange}
            inputTag1={props.inputTag1}
            handleTag1Change={props.handleTag1Change} */
          />
        </div>
        <div>
          <PostIdeaList
            /*  inputText={props.inputText}
            handleTextChange={props.handleTextChange}
            inputRequest={props.inputRequest}
            handleRequestChange={props.handleRequestChange} */
            inputIdea={props.inputIdea}
            handleIdeaChange={props.handleIdeaChange}
            /* inputUpload={props.inputUpload}
            handleUploadChange={props.handleUploadChange}
            inputTag1={props.inputTag1}
            handleTag1Change={props.handleTag1Change} */
          />
        </div>
      </div>
      <div>
        <PostTextInput
          inputText={props.inputText}
          handleTextChange={props.handleTextChange}
          /* inputRequest={props.inputRequest}
          handleRequestChange={props.handleRequestChange}
          inputIdea={props.inputIdea}
          handleIdeaChange={props.handleIdeaChange}
          inputUpload={props.inputUpload}
          handleUploadChange={props.handleUploadChange}
          inputTag1={props.inputTag1}
          handleTag1Change={props.handleTag1Change} */
        />
      </div>
      <div>
        <PostTag1
          /* inputText={props.inputText}
          handleTextChange={props.handleTextChange}
          inputRequest={props.inputRequest}
          handleRequestChange={props.handleRequestChange}
          inputIdea={props.inputIdea}
          handleIdeaChange={props.handleIdeaChange}
          inputUpload={props.inputUpload}
          handleUploadChange={props.handleUploadChange} */
          inputTag1={props.inputTag1}
          handleTag1Change={props.handleTag1Change}
        />
        <PostTag2
          inputTag2={props.inputTag2}
          handleTag2Change={props.handleTag2Change}
        />
        <PostTag3
          inputTag3={props.inputTag3}
          handleTag3Change={props.handleTag3Change}
        />
      </div>
      <div>
        <PostUploadPhotoVideo
          /*    inputText={props.inputText}
          handleTextChange={props.handleTextChange}
          inputRequest={props.inputRequest}
          handleRequestChange={props.handleRequestChange}
          inputIdea={props.inputIdea}
          handleIdeaChange={props.handleIdeaChange} */
          inputUpload={props.inputUpload}
          handleUploadChange={props.handleUploadChange}
          /* inputTag1={props.inputTag1}
          handleTag1Change={props.handleTag1Change} */
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
