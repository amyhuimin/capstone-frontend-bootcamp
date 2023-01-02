import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

import IconButton from "@mui/material/IconButton";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PostAnIdea, getCurrentUser } from "../Queries";

import PostUploadPhotoVideo from "./PostUploadPhotoVideo";

export default function NewIdeaForm() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [IdeaName, setIdeaName] = React.useState(null);
  const [OneLiner, setOneLiner] = React.useState(null);
  const [Descr, setDescr] = React.useState(null);
  const [Purpose, setPurpose] = React.useState(null);
  const [MainFeature, setMainFeature] = React.useState(null);
  const [OtherFeature, setOtherFeature] = React.useState(null);
  const [TargetAud, setTargetAud] = React.useState(null);
  const [UsageReason, setUsageReason] = React.useState(null);
  const [Differentator, setDifferentator] = React.useState(null);
  const [Tag1, setTag1] = React.useState(null);
  const [Tag2, setTag2] = React.useState(null);
  const [Tag3, setTag3] = React.useState(null);
  const [Status, setStatus] = React.useState("Private");
  const [ImgUrl, setImgURL] = React.useState("");
  const { mutate } = useMutation((data) => PostAnIdea(data), {
    mutationKey: "PostUploadIdea",
  });
  const { isLoading, data, isError } = useQuery(["currentUser"], () =>
    getCurrentUser({
      data: user.email,
      accessToken: async () => await getUserInfo(),
    })
  );

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
            value={IdeaName}
            onChange={(event) => setIdeaName(event.target.value)}
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
            value={OneLiner}
            onChange={(event) => setOneLiner(event.target.value)}
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
            value={Descr}
            onChange={(event) => setDescr(event.target.value)}
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
            value={Purpose}
            onChange={(event) => setPurpose(event.target.value)}
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
            value={MainFeature}
            onChange={(event) => setMainFeature(event.target.value)}
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
            value={OtherFeature}
            onChange={(event) => setOtherFeature(event.target.value)}
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
            value={Differentator}
            onChange={(event) => setDifferentator(event.target.value)}
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
            value={TargetAud}
            onChange={(event) => setTargetAud(event.target.value)}
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
            value={UsageReason}
            onChange={(event) => setUsageReason(event.target.value)}
          />
        </DialogContent>
      ),
    },
    {
      label: "Upload Video & Photos as reference",
      description: (
        <div>
          <PostUploadPhotoVideo ImageSetter={setImgURL} />
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
              value={Tag1}
              onChange={(event) => setTag1(event.target.value)}
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
              value={Tag2}
              onChange={(event) => setTag2(event.target.value)}
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
              value={Tag3}
              onChange={(event) => setTag3(event.target.value)}
            />
          </DialogContent>
          {Status}
          <ToggleButtonGroup exclusive aria-label="text alignment">
            <IconButton
              size="large"
              color={Status === "Live" ? "primary" : "secondary"}
              onClick={(event) => setStatus("Live")}
            >
              <PublicIcon />
            </IconButton>
            <IconButton
              size="large"
              color={Status === "Private" ? "primary" : "secondary"}
              onClick={(event) => setStatus("Private")}
            >
              <PublicOffIcon />
            </IconButton>
          </ToggleButtonGroup>
        </div>
      ),
    },
  ];

  const [open, setOpen] = React.useState(false);

  const getUserInfo = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });
    return accessToken;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleReset();
    setOpen(false);
  };

  const handleSubmit = async () => {
    console.log("handlesubmit"+data)
    const newIdea = {
      IdeaId: parseInt(data.Ideas) + 1,
      UserId: data.Id,
      IdeaProfileImgURL: data.ProfilePicURL,
      IdeaName: IdeaName,
      OneLiner: OneLiner,
      Descr: Descr,
      Purpose: Purpose,
      Differentator: Differentator,
      MainFeature: MainFeature,
      OtherFeature: OtherFeature,
      TargetAud: TargetAud,
      UsageReason: UsageReason,
      ImgURL: ImgUrl,
      status: Status,
      Tag1: Tag1,
      Tag2: Tag2,
      Tag3: Tag3,
    };

    const accesstoken = await getUserInfo();
    mutate(
      { newIdea: newIdea, accessToken: accesstoken },
      { onSuccess: handleClose(), retry: 3 }
    );
  };
  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep = isLastStep() ? steps.length : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setIdeaName(null);
    setOneLiner(null);
    setDescr(null);
    setPurpose(null);
    setMainFeature(null);
    setOtherFeature(null);
    setTargetAud(null);
    setUsageReason(null);
    setDifferentator(null);
    setTag1(null);
    setTag2(null);
    setTag3(null);
    setStatus("Private");
    setIdeaName();
    setActiveStep(0);
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

      {activeStep === steps.length ? (
        <Dialog open={open} onClose={handleClose}>
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Uploaded.</Typography>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleSubmit}>Close</Button>
            </Box>
          </React.Fragment>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose}>
          <Typography>{steps[activeStep].label}</Typography>

          {steps[activeStep].description}
          <MobileStepper
            variant="dots"
            steps={4}
            position="static"
            sx={{ flexGrow: 1 }}
            activeStep={activeStep}
          />

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
                {activeStep === steps.length - 1 ? "Preview Post" : "Next"}
              </Button>

              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </React.Fragment>
        </Dialog>
      )}
    </div>
  );
}
