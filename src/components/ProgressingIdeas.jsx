import React from "react";
// import { progressingIdeas } from "../seedData";
import FollowedItems from "./FollowedItems";
import { useAuth0 } from "@auth0/auth0-react";

//React Query imports
import { LeftNavQuery } from "../Queries.js";
import {  getCurrentUser } from "../Queries";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";


function ProgressingIdeas(progressingIdeas) {

  //React Query hook
  // const { user, getAccessTokenSilently } = useAuth0();
  // const getUserInfo = async () => {
  //   const accessToken = await getAccessTokenSilently({
  //     audience: `https://Proj3/api`,
  //     scope: "read:current_user",
  //   });
  //   return accessToken;
  // };

  const { isLoading, data, isError } = useQuery(
    // ["currentUser"],
    // () =>
    //     getCurrentUser({
    //       userEmail: user.email,
    //       accessToken: async () => await getUserInfo(),
    //     })
      ["followedItems"], //[key(Ownself name it), props]
    () => LeftNavQuery() //function you want to use from Queries.js
  );

  if (isLoading) {
    return (
      <div className="rightNewsBar">
        <Box bgcolor="white">
          <div>is Loading</div>
        </Box>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="rightNewsBar">
        <Box bgcolor="white">
          <div>Error Loading Ideas</div>
        </Box>
      </div>
    );
  }

  let followedItems = data.data;

  return (
    <div>
      <h1 style={{ marginLeft: 10 }}>Progressing Ideas</h1>
      {followedItems.map((data) => {
        return (
          <FollowedItems key={data.Id} img={data.ImgURL} name={data.IdeaName} />
        );
      })}
    </div>
  );
}

export default ProgressingIdeas;
