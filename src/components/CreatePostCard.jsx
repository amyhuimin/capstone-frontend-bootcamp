import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player/lazy";
import Button from "@mui/material/Button";
import ExpandPostFormRequest from "./ExpandPostFormRequest";
import ExpandPostFormText from "./ExpandPostFormText";
import ExpandPostFormPhotoVideo from "./ExpandPostFormPhotoVideo";
import ExpandPostFormIdea from "./ExpandPostFormIdeas";
import "./cssFiles/Posting.css";

const CreatePostCard = () => {
  return (
    <div className="postCard">
      <Card className="cards">
        <CardContent
          style={{ padding: "3%", paddingLeft: "5%", paddingRight: "5%" }}
        >
          <ExpandPostFormIdea />
          <div className="postButtonArea">
            <ExpandPostFormRequest />

            <ExpandPostFormText />

            <ExpandPostFormPhotoVideo />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostCard;
