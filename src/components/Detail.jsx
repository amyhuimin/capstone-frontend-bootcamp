import React from "react";

function Detail(props) {
  return <div style={{ fontWeight: props.fontWeight }}>{props.detailInfo}</div>;
}

export default Detail;
