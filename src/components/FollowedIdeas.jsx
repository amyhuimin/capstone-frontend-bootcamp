import React from "react";
import { followedIdeas } from "../seedData";
import FollowedItems from "./FollowedItems";

function createFollowedIdeas(followedIdea) {
  return (
    <FollowedItems
      key={followedIdea.id}
      name={followedIdea.user}
      img={followedIdea.imgURL}
      extra={followedIdea.ideaName}
    />
  );
}

function FollowedIdeas() {
  return (
    <div>
      <h1 style={{ marginLeft: 10 }}>Followed Ideas</h1>
      {followedIdeas.map(createFollowedIdeas)}
    </div>
  );
}

export default FollowedIdeas;
