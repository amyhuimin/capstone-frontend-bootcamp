import React, { useEffect } from "react";
// import { progressingIdeas } from "../seedData";
import FollowedItems from "./FollowedItems";
import { useAuth0 } from "@auth0/auth0-react";
import FollowedIdeas from "./FollowedIdeas";
//React Query imports
import { LeftNavQuery } from "../Queries.js";
import { getCurrentUser } from "../Queries";
import { useMutation } from "@tanstack/react-query";

function ProgressingIdeas(progressingIdeas) {
  //React Query hook
  const { user, getAccessTokenSilently } = useAuth0();
  const [userEmail, setUUID] = React.useState("");
  const [followedItems, setFollowedItems] = React.useState(null);
  const { data, mutate, isLoading, isError } = useMutation(
    (props) => getCurrentUser(props),
    {
      retry: false,
      onSuccess: (data) => setFollowedItems(Object.values(data.FollowIdeas)),
    }
  );

  const getUserInfo = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });

    mutate({ data: userEmail, accessToken: accessToken });
  };

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

  if (followedItems !== null) {
    return (
      <div>
        <FollowedIdeas data={followedItems} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ProgressingIdeas;
