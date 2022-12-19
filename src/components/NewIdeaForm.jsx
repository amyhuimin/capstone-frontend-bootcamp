import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import PostUploadPhotoVideo from "./PostUploadPhotoVideo";

const steps = [
  {
    label: "What is the Idea? (details)",
    description: (
      <DialogContent>
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
    ),
  },
  {
    label: "What's the uniqueness?",
    description: (
      <DialogContent>
        <TextField
          autoFocus
          id="outlined-basic"
          variant="outlined"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          margin="dense"
          fullWidth
          type="mainFeature"
          placeholder="What's the main feature?"
        />
        <TextField
          autoFocus
          id="outlined-basic"
          variant="outlined"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          fullWidth
          type="otherFeatures"
          placeholder="What are the other features?"
        />
        <TextField
          autoFocus
          id="outlined-basic"
          variant="outlined"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          fullWidth
          type="diffSimilarIdeas"
          placeholder="How is it different from similar ideas?"
        />
        <TextField
          autoFocus
          id="outlined-basic"
          variant="outlined"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          fullWidth
          type="forWho"
          placeholder="Who is this for?"
        />
        <TextField
          autoFocus
          id="outlined-basic"
          variant="outlined"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          fullWidth
          type="why"
          placeholder="Why will people use this? (pain point)"
        />
      </DialogContent>
    ),
  },
  {
    label: "Upload Video & Photos as reference",
    description: (
      <div>
        <PostUploadPhotoVideo />
        <br />
        Place holder for upload photos and videos preview
      </div>
    ),
  },
  {
    label: "Saving the idea",
    description: (
      <div>
        <DialogContent>
          <TextField
            autoFocus
            id="outlined-basic"
            variant="outlined"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            fullWidth
            type="tag1"
            placeholder="Tag Input 1"
          />
          <TextField
            autoFocus
            id="outlined-basic"
            variant="outlined"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            fullWidth
            type="tag2"
            placeholder="Tag Input 2"
          />
          <TextField
            autoFocus
            id="outlined-basic"
            variant="outlined"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            fullWidth
            type="tag3"
            placeholder="Tag Input 3"
          />
        </DialogContent>
        Set private or Live!
        <ToggleButtonGroup
          // value={alignment}
          exclusive
          // onChange={handleAlignment}
          aria-label="text alignment"
        >
          <IconButton size="large" color="inherit">
            <PublicIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
            <PublicOffIcon />
          </IconButton>
        </ToggleButtonGroup>
      </div>
    ),
  },
];

export default function NewIdeaForm() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const maxSteps = steps.length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
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
        {/* <Box sx={{ maxWidth: 400, height: "100px", flexGrow: 1 }}> */}
        {/* <Paper
            square
            elevation={0}
            // sx={{
            //   display: "flex",
            //   alignItems: "center",
            //   height: 50,
            //   pl: 3,
            //   bgcolor: "background.default",
            // }}
          > */}
        <Typography>{steps[activeStep].label}</Typography>

        {steps[activeStep].description}
        <MobileStepper
          variant="dots"
          steps={4}
          position="static"
          sx={{ maxWidth: 400, flexGrow: 1 }}
          activeStep={activeStep}
          // nextButton={
          //   <Button
          //     size="small"
          //     onClick={handleNext}
          //     disabled={activeStep === 4}
          //   >
          //     {activeStep === steps.length - 1 ? "Finish" : "Next"}
          //     {theme.direction === "rtl" ? (
          //       <KeyboardArrowLeft />
          //     ) : (
          //       <KeyboardArrowRight />
          //     )}
          //   </Button>
          // }
          // backButton={
          //   <Button
          //     size="small"
          //     onClick={handleBack}
          //     disabled={activeStep === 0}
          //   >
          //     {theme.direction === "rtl" ? (
          //       <KeyboardArrowRight />
          //     ) : (
          //       <KeyboardArrowLeft />
          //     )}
          //     Back
          //   </Button>
          // }
        />
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>

              <Box sx={{ flex: "1 1 auto" }} />

            </Box>
          </React.Fragment>
        )}

        {/* </Paper> */}
        {/* </Box> */}
        {/* {activeStep !== steps.length &&
          (completed[activeStep] ? (
            <Typography variant="caption" sx={{ display: "inline-block" }}>
              Step {activeStep + 1} already completed
            </Typography>
          ) : (
            <Button onClick={handleComplete}>
              {completedSteps() === totalSteps() - 1
                ? "Finish"
                : "Skip/ Complete Step"}
            </Button>
          ))} */}
      </Dialog>
    </div>
  );
}
