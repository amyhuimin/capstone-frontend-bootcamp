import React, { useEffect, useState } from "react";
// import { progressingIdeas } from "../seedData";
import FollowedItems from "./FollowedItems";
import { useAuth0 } from "@auth0/auth0-react";
import FollowedIdeas from "./FollowedIdeas";
//React Query imports

import { getUserIdeas } from "../Queries";
import { useQuery } from "@tanstack/react-query";

function ProgressingIdeas(props) {
  const [followedItems, setFollowedItems] = useState(null);
  const { isLoading, data, isError } = useQuery(
    ["followedIdea", props], //[key(Ownself name it), props]
    (props) => getUserIdeas(props) //function you want to use from Queries.js
  );
  useEffect(() => {
    if (data !== null && data !== undefined) {
      setFollowedItems(Object.values(data));
    }
  }, [data]);
  if (isLoading) {
    return <div>is Loading</div>;
  } else if (isError) {
    return <div>Error Loading</div>;
  }

  if (followedItems !== null) {
    console.log(followedItems);
    return (
      <div>
        <h1 style={{ marginLeft: 10 }}>My Ideas</h1>
        {followedItems.map((item) => {
          console.log(item.id);
          return (
            <FollowedItems
              key={item.id}
              name={item.UserId}
              img={item.IdeaProfileImgURL}
              extra={item.IdeaName}
            />
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ProgressingIdeas;
