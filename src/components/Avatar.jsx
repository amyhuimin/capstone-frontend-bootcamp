import React from "react";
import "./cssFiles/LeftNavBar.css";

function Avatar(props) {
  return (
    <div className="circle-border">
      <img className="circle-img" src={props.img} alt="avatar_img" />
    </div>
  );
}

export default Avatar;
