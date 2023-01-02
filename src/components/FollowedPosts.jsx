import React from "react";
import { followedPosts } from "../seedData";
import FollowedItems from "./PostItems";
import { useQuery } from "@tanstack/react-query";
import { GetAPost } from "../Queries";

function CreateFollowedPosts(followedPost) {
  const { isLoading, data, isError } = useQuery(
    ["followedPost", followedPost], //[key(Ownself name it), props]
    (followedPost) => GetAPost(followedPost) //function you want to use from Queries.js
  );
  if (isLoading) {
    return <div>is Loading</div>;
  }
  if (isError) {
    return <div>Error Loading</div>;
  }
  return (
    <FollowedItems
      key={data.Id}
      name={data.User}
      img={data.ImgURL}
      oneLinerDesc={data.IdeaName}
    />
  );
}

function FollowedPosts(props) {
  var followedPosts = props.data;
  if (followedPosts !== null && followedPosts !== undefined) {
    return (
      <div>
        <h1 style={{ marginLeft: 10 }}>Followed Posts</h1>
        {followedPosts.map((followedPost) => CreateFollowedPosts(followedPost))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default FollowedPosts;
