import React from "react";
// import { progressingIdeas } from "../seedData";
import FollowedItems from "./FollowedItems";

//React Query imports
import { LeftNavQuery } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";

// function CreateProgressingIdeas(progressingIdea) {

//   return (
//     <FollowedItems
//       key={progressingIdea.id}
//       img={progressingIdea.imgURL}
//       name={progressingIdea.ideaName}
//     />
//   );
// }

function ProgressingIdeas(progressingIdeas) {
  //React Query hook
  const { isLoading, data, isError } = useQuery(
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
