import {
  Avatar,
  Paper,
  Box,
  MobileStepper,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import RightNewsBar from "./RightNewsBar";
import "./cssFiles/PerIdeaPage.css";
/* import SwipeableViews from "react-swipeable-views"; */

import { useTheme } from "@mui/material/styles";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Box from "@mui/material/Box";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Popover from "@mui/material/Popover";
// import EditPropertyForm from "./EditPropertyForm.js";

// import { BACKEND_URL } from "../constants.js";

const BACKEND_URL = "http://localhost:4000";

/* const AutoPlaySwipeableViews = autoPlay(SwipeableViews); */

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const PerIdeaPage = () => {
  const [ideaId, setIdeaId] = useState();
  const [idea, setIdea] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    console.log("idea id" + ideaId);
    // If there is an ideaId, retrieve the idea data
    if (ideaId !== undefined) {
      axios.get(`${BACKEND_URL}/idea/get/${ideaId}`).then((response) => {
        console.log(response);
        setIdea(response.data);
      });
    }
    // Only run this effect on change to ideaId
  }, [ideaId]);

  // Update listing ID in state if needed to trigger data retrieval
  const params = useParams();
  console.log(params);
  if (ideaId !== params.IdeaId) {
    setIdeaId(params.IdeaId);
  }

  // Functions for Edit button Popover
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  // Function for Delete Button
  // const handleDelete = async (id, home_name) => {
  //   await axios.delete(`${BACKEND_URL}/idea/get/${id}`);
  //   // console.log(`${ideaName} successfully deleted.`);
  //   navigate("/ideas");
  // };

  return (
    <div className="landingPage">
      <div className="postFeed">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={3}>
            <span className="span.a">
              <Avatar img={idea.IdeaProfileImgURL} />
            </span>{" "}
            <span>{idea.IdeaName} </span>
            <br />
            {idea.OneLiner}
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={3} />
        </Box>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
        </Box>
        <Box>
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="/images/react.jpg"
                alt="slide 1"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="/images/vue.jpg"
                alt="slide 2"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src="/images/angular.jpg"
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel>
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={3} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={3} />
        </Box>
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
};

export default PerIdeaPage;
