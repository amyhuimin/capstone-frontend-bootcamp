import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export default function NewIdeaForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{ backgroundColor: "#FFCE35", color: "black" }}
        variant="outlined"
      >
        Save a new idea
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box
          className="overflow-auto"
          sx={{ maxHeight: "100vh", width: "40vw", pt: "10%" }}
        >
          <DialogTitle>What's the idea? (details)</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
            <TextField
              autoFocus
              id="outlined-basic"
              variant="outlined"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              margin="dense"
              fullWidth
              type="ideaName"
              placeholder="Idea Name"
            />
            <TextField
              autoFocus
              id="outlined-basic"
              variant="outlined"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              fullWidth
              type="shortDescription"
              // label="Outlined"
              // value={shortDescription}
              // onChange={handleChange}
              placeholder="One liner description for a mum's test!"
            />
            <TextField
              autoFocus
              id="outlined-basic"
              variant="outlined"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              fullWidth
              type="detailedDescription"
              placeholder="Detailed description"
            />
            <TextField
              autoFocus
              id="outlined-basic"
              variant="outlined"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              fullWidth
              type="purpose"
              placeholder="What's the purpose of the idea"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save Idea!</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
