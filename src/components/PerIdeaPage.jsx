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
import { styled } from "@mui/material/styles";
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

const TagBox = styled(Box)({
  display: "table-cell",
  flexWrap: "wrap",
  textAlign: "center",
  verticalAlign: "middle",
  padding: "0 1.2vw",
  background: "#f7dfdf",
  fontSize: "12px",
  margin: "0 0 8px 0",
});

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

  const date = new Date(idea.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

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
  console.log("idea", idea.IdeaProfileImgURL);

  return (
    <div className="perIdeaInfo">
      <div className="ideaDetails">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              height: "75vh",
              maxWidth: "69vw",
            },
          }}
        >
          <Paper elevation={3}>
            <div className="picAndIdea">
              <Box>
                <Avatar
                  src={idea.IdeaProfileImgURL}
                  sx={{ margin: 0, width: 52, height: 52 }}
                />
              </Box>
              <div className="ideaName">
                <p>
                  <b>{idea.IdeaName}</b>
                </p>
              </div>
            </div>
            <br />
            <div className="linerAndDate">
              <span>{idea.OneLiner}</span>
              <span>
                <b>Generated:</b> {date}
              </span>
            </div>

            <div className="ideaInfo">
              <div>
                <Box
                  bgcolor="#fcf5d9"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: 1,
                    marginTop: 0.5,
                    marginLeft: "1vw",
                    "& > :not(style)": {
                      m: 1.5,
                      width: "27vw",
                      height: "20vh",
                    },
                  }}
                >
                  <div>
                    <span>
                      <b>Full Description</b>
                    </span>
                    <br />
                    <span>{idea.Descr}</span>
                  </div>
                </Box>
              </div>
              <div>
                <Box
                  bgcolor="#fcf5d9"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: 0.5,
                    marginRight: 1,
                    "& > :not(style)": {
                      m: 1.5,
                      width: "18vw",
                      height: "57vh",
                    },
                  }}
                >
                  <div>
                    <span>
                      <b>Purpose</b>
                    </span>
                    <br />
                    <span>{idea.Purpose}</span>
                    <br />
                    <br />
                    <span>
                      <b>Differentator</b>
                    </span>
                    <br />
                    <span>{idea.Differentator}</span>
                    <br />
                    <br />
                    <span>
                      <b>Main Feature</b>
                    </span>
                    <br />
                    <span>{idea.MainFeature}</span>
                    <br />
                    <br />
                    <span>
                      <b>Other Feature</b>
                    </span>
                    <br />
                    <span>{idea.OtherFeature}</span>
                  </div>
                </Box>
              </div>
              <div>
                <Box
                  bgcolor="#fcf5d9"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: 0.5,
                    marginRight: "1vw",
                    "& > :not(style)": {
                      m: 1.5,
                      width: "15vw",
                      height: "57vh",
                    },
                  }}
                >
                  <div className="infoBox3">
                    <div>
                      <span>
                        <b>Target Audience</b>
                      </span>
                      <br />
                      <span>{idea.TargetAud}</span>
                      <br />
                      <br />
                      <span>
                        <b>Audience Painpoint</b>
                      </span>
                      <br />
                      <span>{idea.UsageReason}</span>
                    </div>
                    <div className="tags">
                      <div>
                        {idea.Tag1 != null ? (
                          <TagBox>
                            <p>{idea.Tag1}</p>
                          </TagBox>
                        ) : null}
                      </div>
                      <div>
                        {idea.Tag2 != null ? (
                          <TagBox>
                            <p>{idea.Tag2}</p>
                          </TagBox>
                        ) : null}
                      </div>
                      {idea.Tag3 != null ? (
                        <TagBox>
                          <p>{idea.Tag3}</p>
                        </TagBox>
                      ) : null}
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </Paper>
        </Box>
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
};

export default PerIdeaPage;

{
  /* <Box>
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
        </Box> */
}
