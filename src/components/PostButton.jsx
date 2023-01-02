import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import { ideaData } from "../IdeaSeedData";

const ColorButton = styled(Button)(({ theme }) => ({
  //color: yellow[600],
  fontSize: 15,
  textTransform: "none",
  //justifyContent: "space-between",
  backgroundColor: yellow[300],
  "&:hover": {
    backgroundColor: yellow[600],
  },
}));

const PostButton = (props) => {
  const oneLinerText = () => {
    if (props.inputIdea == ideaData.ideaName) {
      return ideaData.oneliner;
    } else {
      return "Error";
    }
  };

  const [data, setData] = useState({
    date: new Date(),
    user: "Jordan",
    ideaName: props.inputIdea,
    oneliner: { oneLinerText },
    text: props.inputText,
    imgURL: props.inputUpload.imgURL,
    videoURL: props.inputUpload.videoURL,
    requestType: props.inputRequest,
    tag1: props.inputTag1,
    tag2: props.inputTag2,
    tag3: props.inputTag3,
  });

  const handleChange = (event) => {
    props.handleCloseChange(event.target.event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      ideaName: null,
      oneliner: null,
      text: null,
      imgURL: null,
      videoURL: null,
      requestType: null,
      tag1: null,
      tag2: null,
      tag3: null,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ColorButton
          variant="contained"
          endIcon={<SendIcon />}
          autoFocus
          onClick={handleChange}
          type="submit"
        >
          Post!
        </ColorButton>
      </form>
    </div>
  );
};

export default PostButton;
