import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { makeNewUser } from "../Queries";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import PostUploadPhotoVideo from "./PostUploadPhotoVideo";

const NewUserForm = (props) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [username, setUsername] = useState("");
  const [imageUrl, setURL] = useState("");
  const { data, mutate } = useMutation((props) => makeNewUser(props), {
    onError: () => props.ExistingUserSet(false),
    onSuccess: () => props.ExistingUserSet(true),
    retry: false,
  });

  const steps = [
    {
      label: "Enter your desired user name",
      description: (
        <TextField
          autoFocus
          id="outlined-basic"
          variant="outlined"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          margin="dense"
          fullWidth
          type="userName"
          placeholder="User Name"
          onChange={(event) => setUsername(event.target.value)}
        />
      ),
    },
    {
      label: "Upload a Profile Picture",
      description: (
        <div>
          <PostUploadPhotoVideo ImageSetter={setURL} />
          <br />
          {imageUrl === "" ? (
            <></>
          ) : (
            <img
              style={{ height: 300, width: 300, borderRadius: 150 }}
              src={imageUrl}
              alt="error"
            />
          )}
        </div>
      ),
    },
    {
      label: "Confirm your details",
      description: (
        <div>
          {imageUrl === "" ? (
            <></>
          ) : (
            <img
              style={{ height: 300, width: 300, borderRadius: 150 }}
              src={imageUrl}
              alt="error"
            />
          )}
          <br />
          <h1>User Name : {username}</h1>
        </div>
      ),
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    newUser();
    setActiveStep(0);
  };

  async function newUser() {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });
    mutate({
      UserEmail: user.email,
      UserName: username,
      ProfilePicURL: imageUrl,
      accessToken: accessToken,
    });
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Confirm" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            All steps completed - you&apos;re now registered as a User
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Continue
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default NewUserForm;
