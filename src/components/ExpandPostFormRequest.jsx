import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PostingForm from "./PostingForm";
import PostButton from "./PostButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: grey[600],
  fontSize: 15,
  textTransform: "none",
  justifyContent: "space-between",
  backgroundColor: grey[200],
  "&:hover": {
    backgroundColor: grey[300],
  },
}));

const ExpandPostFormRequest = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseChange = (newState) => {
    setOpen(newState);
  };

  return (
    <div>
      <ColorButton variant="contained" onClick={handleClickOpen}>
        Request
        <KeyboardArrowDownIcon />
      </ColorButton>
      <BootstrapDialog
        fullWidth="true"
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Create Post
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <PostingForm
            inputText={props.inputText}
            handleTextChange={props.handleTextChange}
            inputRequest={props.inputRequest}
            handleRequestChange={props.handleRequestChange}
            inputIdea={props.inputIdea}
            handleIdeaChange={props.handleIdeaChange}
            inputUpload={props.inputUpload}
            handleUploadChange={props.handleUploadChange}
            inputTag1={props.inputTag1}
            handleTag1Change={props.handleTag1Change}
          />
        </DialogContent>

        <DialogActions>
          <PostButton
            handleCloseChange={handleCloseChange}
            open={open}
            inputText={props.inputText}
            inputRequest={props.inputRequest}
            inputIdea={props.inputIdea}
            inputUpload={props.inputUpload}
            inputTag1={props.inputTag1}
          />
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default ExpandPostFormRequest;
