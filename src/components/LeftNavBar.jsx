import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//React Query imports
// import { LeftNavQuery } from "../Queries.js";
// import { useQuery } from "@tanstack/react-query";

import ProgressingIdeas from "./ProgressingIdeas";
import "./cssFiles/LeftNavBar.css";
import "../App.css";

import FollowedIdeas from "./FollowedIdeas";
import FollowedPosts from "./FollowedPosts";
import { getCurrentUser } from "../Queries";
import { useMutation } from "@tanstack/react-query";
// import MediaFollowings from "./MediaFollowings";

// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonGroup } from "@mui/material";
import NewIdeaForm from "./NewIdeaForm";
import { followedIdeas } from "../seedData";

function LeftNavBar() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userEmail, setUUID] = useState("");
  const [UserId, setUserId] = useState("");
  const [followedItems, setFollowedItems] = useState(null);
  const [followedPosts, setfollowedPosts] = useState(null);
  const { mutate } = useMutation((props) => getCurrentUser(props), {
    retry: false,
    onSuccess: (data) => {
      setFollowedItems(Object.values(data.FollowIdeas));
      setfollowedPosts(Object.values(data.FollowPosts));
      setUserId(data.Id);
    },
  });

  useEffect(() => {
    if (user !== undefined) {
      setUUID(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (userEmail !== "") {
      getUserInfo();
    }
  }, [userEmail]);

  const getUserInfo = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });

    mutate({ data: userEmail, accessToken: accessToken });
  };

  return (
    <div className="leftNavBar">
      {user !== undefined ? (
        <Box bgcolor="white" style={{ borderRadius: 2, width: "100%" }}>
          <div className="ActionsBtn">
            <ButtonGroup>
              <NewIdeaForm />
              <br />
            </ButtonGroup>
          </div>
          <div className="leftNavScroll">
            {UserId !== "" ? <ProgressingIdeas UserId={UserId} /> : <></>}
            {followedPosts !== null ? (
              <FollowedPosts data={followedPosts} />
            ) : (
              <></>
            )}
            {followedIdeas !== null ? (
              <FollowedIdeas data={followedItems} />
            ) : (
              <></>
            )}
          </div>
        </Box>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LeftNavBar;
