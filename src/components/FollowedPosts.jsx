import React from "react";
import { followedPosts } from "../seedData";
import FollowedItems from "./FollowedItems";

function createFollowedPosts(followedPost) {
  return (
    <FollowedItems
      key={followedPost.id}
      name={followedPost.user}
      img={followedPost.imgURL}
      extra={followedPost.postText}
    />
  );
}

function FollowedPosts() {
  return (
    <div>
      <h1 style={{ marginLeft: 10 }}>Followed Posts</h1>
      {followedPosts.map(createFollowedPosts)}
    </div>
  );
}

export default FollowedPosts;
