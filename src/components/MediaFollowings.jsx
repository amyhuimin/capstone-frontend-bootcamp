import React from "react";
import { mediaFollowings } from "../seedData";
import FollowedItems from "./FollowedItems";

function createMediaFollowings(followedMedia) {
  return (
    <FollowedItems
      key={followedMedia.id}
      img={followedMedia.imgURL}
      name={followedMedia.mediaName}
    />
  );
}

function MediaFollowings() {
  return (
    <div>
      <h1 style={{ marginLeft: 10 }}>Media Followings</h1>
      {mediaFollowings.map(createMediaFollowings)}
    </div>
  );
}

export default MediaFollowings;
