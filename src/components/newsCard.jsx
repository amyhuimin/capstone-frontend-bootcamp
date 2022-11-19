import React from "react";
import Detail from "./Detail";
import "./cssFiles/newsCard.css";
import { Link } from "@mui/material";
import { lightBlue, lightGreen } from "@mui/material/colors";

function NewsCard(props) {
  if (
    props.imgurl == undefined ||
    props.headline == undefined ||
    props.url == undefined
  ) {
    return;
  }
  return (
    <div className="newsCard">
      <a
        style={{ color: "inherit" }}
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <img id="newsImage" src={props.imgurl} alt="lolz" />
        <div className="newsCarddescription">
          <Detail detailInfo={props.headline} fontWeight={700} />
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
