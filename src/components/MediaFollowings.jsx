import React from "react";
import { mediaFollowings } from "../seedData";
import FollowedItems from "./FollowedItems";

function createMediaFollowings(followedMedia) {
  return (
    <FollowedItems
      key={followedMedia.id}
      img={followedMedia.imgURL}
      extra={followedMedia.mediaName}
    />
  );
}

function MediaFollowings() {
  return (
    <div>
      <h1 className="heading">Media Followings</h1>
      {mediaFollowings.map(createMediaFollowings)}
    </div>
  );
}

export default MediaFollowings;
