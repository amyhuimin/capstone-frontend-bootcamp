import React from "react";
import Detail from "./Detail";
import "./cssFiles/newsCard.css";
import ReadMore from "./ReadMore";

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
      </a>
      <div className="newsCarddescription">
        <ReadMore content={props.headline} link={props.url} />
      </div>
    </div>
  );
}

export default NewsCard;
