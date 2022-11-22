import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import "./cssFiles/FollowedIdeas.css";

function FollowedItems(props) {
  return (
    <div className="FollowedItems">
      <Avatar img={props.img} />
      <div className="FollowedItemsProps">
        <Detail detailInfo={props.name} fontWeight={700} />
        <Detail detailInfo={props.extra} fontWeight={200} />
      </div>
    </div>
  );
}

export default FollowedItems;
