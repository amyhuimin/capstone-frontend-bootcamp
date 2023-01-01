import React, { useState } from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../Queries";
import { useAuth0 } from "@auth0/auth0-react";
import "./cssFiles/FollowedIdeas.css";
import { useEffect } from "react";

function FollowedItems(props) {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userName, setuserName] = useState("");
  const { data, mutate } = useMutation((props) => getCurrentUser(props), {
    onSuccess: (data) => setuserName(data.setuserName),
    retry: false,
  });

  async function checkUser() {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });
    mutate({ data: props.name, accessToken: accessToken });
  }
  useEffect(() => checkUser(), []);
  if (userName !== "") {
    return (
      <div className="FollowedItems">
        <Avatar img={props.img} />
        <div className="FollowedItemsProps">
          <Detail detailInfo={userName} fontWeight={700} />
          <Detail detailInfo={props.extra} fontWeight={200} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default FollowedItems;
