import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Popover from "@mui/material/Popover";
// import EditPropertyForm from "./EditPropertyForm.js";

import { BACKEND_URL } from "../constants.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const PerIdea = () => {
  const [ideaId, setIdeaId] = useState();
  const [idea, setIdea] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // If there is a listingId, retrieve the listing data
    if (ideaId) {
      axios.get(`${BACKEND_URL}/idea/get/${ideaId}`).then((response) => {
        setIdea(response.data);
      });
    }
    // Only run this effect on change to listingId
  }, [ideaId]);

  // Update listing ID in state if needed to trigger data retrieval
  const params = useParams();
  if (ideaId !== params.ideaId) {
    setIdeaId(params.ideaId);
  }
  console.log(idea);

  // Functions for Edit button Popover
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Function for Delete Button
  const handleDelete = async (id, home_name) => {
    await axios.delete(`${BACKEND_URL}/idea/get/${id}`);
    // console.log(`${ideaName} successfully deleted.`);
    navigate("/LandingPage");
  };

  return (
    "Per idea page"
  );
};

export default PerIdea;
