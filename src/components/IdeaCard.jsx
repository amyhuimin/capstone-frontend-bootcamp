import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ideaData } from "../IdeaSeedData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { userData } from "../userData";
import "./cssFiles/IdeaCard.css";

const IdeaCard = () => {
  return (
    <div className="postCard">
      <Card className="cards">
        <div className="ideaDate">
          <span className="ideaCardDateCreated">
            Generated: {ideaData[1].date}
          </span>
        </div>
        <CardHeader
          avatar={<Avatar src={ideaData[1].ideaProfileImgURL} />}
          title={ideaData[1].ideaName}
          subheader={ideaData[1].oneLiner}
        />
        <div className="status">
          {ideaData[1].status === "Private" ? (
            <span className="statusPrivate">{ideaData[1].status}</span>
          ) : (
            <span className="statusLive">{ideaData[1].status}</span>
          )}
        </div>
      </Card>
      <div className="ideaAccordion">
        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1d-header">
            <Typography sx={{ fontWeight: "md", color: "text.secondary" }}>
              {ideaData[1].comments} Comments
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Avatar src={userData[1].imgURL} />
            <Typography> {userData[1].user}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default IdeaCard;
