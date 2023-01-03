import { Avatar, Card, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Box from "@mui/material/Box";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Popover from "@mui/material/Popover";
// import EditPropertyForm from "./EditPropertyForm.js";

// import { BACKEND_URL } from "../constants.js";
import RightNewsBar from "./RightNewsBar";
import "./cssFiles/PerIdeaPage.css";

const BACKEND_URL = "http://localhost:4000";

const PerIdeaPage = () => {
  const [ideaId, setIdeaId] = useState();
  const [idea, setIdea] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("idea id" + ideaId)
    // If there is an ideaId, retrieve the idea data
    if (ideaId !== undefined) {
      axios.get(`${BACKEND_URL}/idea/get/${ideaId}`).then((response) => {
        console.log(response)
        setIdea(response.data);
      });
      
    }
    // Only run this effect on change to ideaId
  }, [ideaId]);

  // Update listing ID in state if needed to trigger data retrieval
  const params = useParams();
  console.log(params)
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
        <Paper>
          <span className="span.a"><Avatar img={idea.IdeaProfileImgURL} /></span> <span>{idea.IdeaName} </span>
          <br />
          {idea.OneLiner}
        </Paper>
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
};

export default PerIdeaPage;
