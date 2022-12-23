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

  /*  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }; */

  const data = [
    {
      date: new Date(),
      user: "Logged in User",
      ideaName: props.inputIdea,
      oneliner: { oneLinerText },
      text: props.inputText,
      imgURL: props.inputUpload.imgURL,
      videoURL: props.inputUpload.videoURL,
      requestType: props.inputRequest,
      tag1: null,
      tag2: null,
      tag3: null,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ColorButton
          variant="contained"
          endIcon={<SendIcon />}
          autoFocus
          onChange={props.handleClose}
        >
          Post!
        </ColorButton>
      </form>
    </div>
  );
};

export default PostButton;
