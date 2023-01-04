import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

//React Query imports
import { PostsQuery } from "../Queries.js";
import { getUserIdeas } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";

import "./cssFiles/rightNewsBar.css";
import "../App.css";
import Box from "@mui/material/Box";
// import { postData } from "../PostSeedData";

import "./cssFiles/newsfeed.css";
import IdeaCard from "./IdeaCard.jsx";

function IdeasFeed(props) {
  //React Query hook
  const [myIdeas, setMyIdeas] = useState(null);
  const { isLoading, data, isError } = useQuery(
    ["followedIdea", props], //[key(Ownself name it), props]
    (props) => getUserIdeas(props) //function you want to use from Queries.js
  );
  useEffect(() => {
    if (data !== null && data !== undefined) {
      setMyIdeas(Object.values(data));
    }
  }, [data]);
  if (isLoading) {
    return <div>is Loading</div>;
  } else if (isError) {
    return <div>Error Loading</div>;
  }

  if (myIdeas !== null) {
    console.log(myIdeas);
    return (
      <div>
        {/* <h1 style={{ marginLeft: 10 }}>My Ideas</h1> */}
        {myIdeas.map((item) => {
          console.log("items" + item);
          return (
            <IdeaCard
              key={item.id}
              name={item.UserId}
              img={item.IdeaProfileImgURL}
              ideaName={item.IdeaName}
              oneLiner={item.OneLiner}
              generatedDate={new Date(item.createdAt).toLocaleDateString(
                "en-US",
                { day: "numeric", month: "short", year: "numeric" }
              )}
              // comments={item.Comments}
              status={item.Status}
            />
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default IdeasFeed;
