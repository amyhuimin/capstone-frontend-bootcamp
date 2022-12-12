import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandPostFormRequest from "./ExpandPostFormRequest";
import ExpandPostFormText from "./ExpandPostFormText";
import ExpandPostFormPhotoVideo from "./ExpandPostFormPhotoVideo";
import ExpandPostFormIdea from "./ExpandPostFormIdeas";
import "./cssFiles/Posting.css";

const CreatePostCard = () => {
  const [inputText, setInputText] = useState("");
  const [inputRequest, setInputRequest] = useState("");
  const [inputIdea, setInputIdea] = useState("");
  const [inputUpload, setInputUpload] = useState({
    imageURL: "",
    videoURL: "",
  });

  const handleTextChange = (newText) => {
    setInputText(newText);
  };

  const handleRequestChange = (newRequest) => {
    setInputRequest(newRequest);
  };

  const handleIdeaChange = (newIdea) => {
    setInputIdea(newIdea);
  };
  const handleUploadChange = (newUpload) => {
    setInputUpload(newUpload);
  };

  return (
    <div className="postCard">
      <Card className="cards">
        <CardContent
          style={{ padding: "3%", paddingLeft: "5%", paddingRight: "5%" }}
        >
          <div>
            <ExpandPostFormIdea
              inputText={inputText}
              handleTextChange={handleTextChange}
              inputRequest={inputRequest}
              handleRequestChange={handleRequestChange}
              inputIdea={inputIdea}
              handleIdeaChange={handleIdeaChange}
              inputUpload={inputUpload}
              handleUploadChange={handleUploadChange}
            />
          </div>
          <div className="postButtonArea">
            <div>
              <ExpandPostFormRequest
                inputText={inputText}
                handleTextChange={handleTextChange}
                inputRequest={inputRequest}
                handleRequestChange={handleRequestChange}
                inputIdea={inputIdea}
                handleIdeaChange={handleIdeaChange}
                inputUpload={inputUpload}
                handleUploadChange={handleUploadChange}
              />
            </div>
            <div>
              <ExpandPostFormText
                inputText={inputText}
                handleTextChange={handleTextChange}
                inputRequest={inputRequest}
                handleRequestChange={handleRequestChange}
                inputIdea={inputIdea}
                handleIdeaChange={handleIdeaChange}
                inputUpload={inputUpload}
                handleUploadChange={handleUploadChange}
              />
            </div>
            <div>
              <ExpandPostFormPhotoVideo
                inputText={inputText}
                handleTextChange={handleTextChange}
                inputRequest={inputRequest}
                handleRequestChange={handleRequestChange}
                inputIdea={inputIdea}
                handleIdeaChange={handleIdeaChange}
                inputUpload={inputUpload}
                handleUploadChange={handleUploadChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostCard;
