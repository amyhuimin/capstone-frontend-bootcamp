import React from "react";
import Detail from "./Detail";
import "./cssFiles/newsCard.css";
import { Link } from "@mui/material";

function NewsCard(props) {
  return (
    <div className="newsCard">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img id="newsImage" src={props.imgurl} alt="lolz" />
        <div className="newsCarddescription">
          <Detail detailInfo={props.headline} fontWeight={700} />
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
