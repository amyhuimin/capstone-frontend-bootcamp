import React from "react";
import "./cssFiles/LeftNavBar.css";

function Detail(props) {
  return <div style={{ fontWeight: props.fontWeight }}>{props.detailInfo}</div>;
}

export default Detail;
