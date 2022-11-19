import React from "react";
import { progressingIdeas } from "../seedData";
import FollowedItems from "./FollowedItems";

function createProgressingIdeas(progressingIdea) {
  return (
    <FollowedItems
      key={progressingIdea.id}
      img={progressingIdea.imgURL}
      name={progressingIdea.ideaName}
    />
  );
}

function ProgressingIdeas() {
  return (
    <div>
      <h1 style={{ marginLeft: 10 }}>Progressing Ideas</h1>
      {progressingIdeas.map(createProgressingIdeas)}
    </div>
  );
}

export default ProgressingIdeas;
