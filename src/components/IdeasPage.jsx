import RightNewsBar from "./RightNewsBar";
import "./cssFiles/landingPage.css";
import NewIdeaForm from "./NewIdeaForm";
import IdeasFeed from "./IdeasFeed";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../Queries";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "@mui/material";

export default function IdeasPage() {
  const [UserId, setUserId] = useState("");
  const [userEmail, setUUID] = useState("");
  const { user, getAccessTokenSilently } = useAuth0();
  const { mutate } = useMutation(
    (props) => getCurrentUser(props), //choose a function for mutate to use
    {
      //mutation settings
      retry: false,
      onSuccess: (data) => {
        setUserId(data.Id);
      },
    }
  );

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

    mutate({ data: userEmail, accessToken: accessToken }); //Props for the function
  };

  return (
    <div className="landingPage">
      <div className="postFeed">
        <Card className="cards" style={{ padding: "3% 0 2% 5%" }}>
          <NewIdeaForm />
        </Card>
        <IdeasFeed UserId={UserId} />
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
}
