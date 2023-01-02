import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import "./cssFiles/FollowedIdeas.css";

function PostItems(props) {
  return (
    <div className="FollowedItems">
      {props.img !== null ? <Avatar img={props.img} /> : <></>}
      <div className="FollowedItemsProps">
        <Detail detailInfo={props.date} fontWeight={200} />
        <Detail detailInfo={props.name} fontWeight={700} />
        <Detail detailInfo={props.ideaName} fontWeight={700} />
        <Detail detailInfo={props.ideaBorn} fontWeight={700} />
        <Detail detailInfo={props.oneLinerDesc} fontWeight={200} />
        <Detail detailInfo={props.requestType} fontWeight={300} />
        <Detail detailInfo={props.text} fontWeight={200} />
        <Detail detailInfo={props.tag1} fontWeight={200} />
        <Detail detailInfo={props.tag2} fontWeight={200} />
        <Detail detailInfo={props.tag3} fontWeight={200} />
        <Detail detailInfo={props.followers} fontWeight={300} />
      </div>
    </div>
  );
}

export default PostItems;
