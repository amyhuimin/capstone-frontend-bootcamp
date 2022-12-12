import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";

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
  /* const onHandleChange = (event) => {
    props.onChange(event.target.value);
  }; */

  return (
    <ColorButton
      variant="contained"
      endIcon={<SendIcon />}
      autoFocus
      onClick={props.handleClose}
    >
      Post!
    </ColorButton>
  );
};

export default PostButton;
