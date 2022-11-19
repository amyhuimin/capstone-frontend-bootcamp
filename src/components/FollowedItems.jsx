import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function FollowedItems(props) {
  return (
    <div className="row-followed-items">
      <Avatar img={props.img} />
      <div className="row-followed-items-details">
        <Detail detailInfo={props.name} />
        <Detail detailInfo={props.extra} />
      </div>
    </div>
  );
}

export default FollowedItems;
