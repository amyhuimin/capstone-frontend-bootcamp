import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../Queries";
import { useAuth0 } from "@auth0/auth0-react";
import "./cssFiles/IdeaCard.css";
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
    // console.log("data" + props.name)
  }
  useEffect(() => checkUser(), []);
  // console.log(userName)
  if (userName !== "") {
    // console.log("props.name" + props.name);
    return (
      <div className="postCard">
        <Card className="cards">
          <div className="ideaDate">
            <span className="ideaCardDateCreated">
              Generated: {props.generatedDate}
            </span>
          </div>
          <Link to={`/idea/get/${props.name}`} key={props.name}>
            
            <CardHeader
              avatar={<Avatar img={props.img} />}
              title={props.ideaName}
              subheader={props.oneLiner}
            />
          </Link>
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
