import React from "react";
import FollowedItems from "./FollowedItems";
import { useQuery } from "@tanstack/react-query";
import { GetAnIdea } from "../Queries";

function CreateFollowedIdeas(followedIdea) {
  const { isLoading, data, isError } = useQuery(
    ["followedIdea", followedIdea], //[key(Ownself name it), props]
    (followedIdea) => GetAnIdea(followedIdea) //function you want to use from Queries.js
  );
  if (isLoading) {
    return <div>is Loading</div>;
  }
  if (isError) {
    return <div>Error Loading</div>;
  }
  console.log(data);
  return (
    <FollowedItems
      key={data.IdeaId}
      name={data.UserId}
      img={data.IdeaProfileImgURL}
      extra={data.IdeaName}
    />
  );
}

function FollowedIdeas(props) {
  var followedIdeas = props.data;
  if (followedIdeas !== null && followedIdeas !== undefined) {
    return (
      <div>
        <h1 style={{ marginLeft: 10 }}>Followed Ideas</h1>
        {followedIdeas.map((followedIdea) => CreateFollowedIdeas(followedIdea))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default FollowedIdeas;
