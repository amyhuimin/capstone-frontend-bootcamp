import React from "react";

const followButton = () => {
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
  
)
}
