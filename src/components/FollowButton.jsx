import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const FollowButton = () => {
  const [followPost, setFollowPost] = useState(false);
  const [numFollow, setNumFollow] = useState(0);

  const handleFollowPostChange = () => {
    setFollowPost((prevState) => !prevState);
    if (followPost) {
      setNumFollow((prev) => prev + 1);
    }
    if (!followPost && followPost > 0) {
      //error in minusing following number
      setNumFollow((prev) => prev - 1);
    }
  };

  const onFollowPostSubmit = () => {};
  // follow post = what to do
  //unfollow post= what to do

  useEffect(() => {
    handleFollowPostChange();
  }, []);

  return (
    <Button
      variant="outlined"
      size="small"
      sx={{ width: 5, textTransform: "none", padding: 0 }}
      onClick={handleFollowPostChange}
    >
      {followPost ? "Follow" : "Following"}
    </Button>
  );
};

export default FollowButton;
