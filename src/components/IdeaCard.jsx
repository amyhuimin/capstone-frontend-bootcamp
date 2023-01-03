import React, { useState } from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../Queries";
import { useAuth0 } from "@auth0/auth0-react";
import "./cssFiles/FollowedIdeas.css";
import { useEffect } from "react";
import { getUserIdeas } from "../Queries";
import { useQuery } from "@tanstack/react-query";

import { Card, CardHeader } from "@mui/material";
import { Typography } from "@mui/joy";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function IdeaCard(props) {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userName, setuserName] = useState("");
  const { data, mutate } = useMutation((props) => getCurrentUser(props), {
    onSuccess: (data) => setuserName(data.UserName),
    retry: false,
  });
  // console.log(props.name);

  async function checkUser() {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });
    mutate({ data: props.name, accessToken: accessToken });
    console.log("data" + props.name)
  }
  useEffect(() => checkUser(), []);
  // console.log(userName)
  if (userName !== "") {
    return (
      <div className="postCard">
        <Card className="cards" style={{ padding: "2% 2% 2% 2%" }}>
          <div className="ideaDate">
            <span className="ideaCardDateCreated">
              Generated: {props.generatedDate}
            </span>
          </div>
          <CardHeader
            avatar={<Avatar img={props.img} />}
            title={props.ideaName}
            subheader={props.oneLiner}
          />
          {/* Backend ideas info do not have status yet */}
          <div className="status">
            {props.status === "Private" ? (
              <span className="statusPrivate">{props.status}</span>
            ) : (
              <span className="statusLive">{props.status}</span>
            )}
          </div>
        </Card>
        {/* Backend seed data do not have comments for each idea yet */}
        <div className="ideaAccordion">
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1d-header"
            >
              <Typography sx={{ fontWeight: "md", color: "text.secondary" }}>
                {props.comments} Comments
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Avatar src={props.imgURL} />
              <Typography> {props.user}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default IdeaCard;
