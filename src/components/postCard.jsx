import React, { useState, useEffect } from "react";
import readMore from "./readMore";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const PostCard = () => {
  const [userData, setUserData] = useState({
    name: "Manfred",
    profilePicURL: "",
  });
  const [ideaName, setIdeaName] = useState("Ideation");
  const [oneLineDes, setOneLineDes] = useState(
    "Helping ideas to grow from 0 to 1 through a community"
  );
  const [request, setRequest] = useState("");
  const [postData, setPostData] = useState({
    text: "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test ",
    videoURL: "",
    pictureURL: "",
    tag1: "CleanTech",
    tag2: "Technology",
    tag3: "",
    numFollow,
  });
  const [numFollow, setNumFollow] = useState(0);
  const [followPost, setFollowPost] = useState(false);

  /* const getDate = async () => {
try {
  await axios.get()
}
catch (err)
console.log(err)
  } */

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

  //add axios.get to get post data
  //add axios.post to send new comments

  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          action={
            <Button
              variant="outlined"
              size="small"
              sx={{ width: 5, textTransform: "none", padding: 0 }}
              onClick={handleFollowPostChange}
            >
              {followPost ? "Follow" : "Following"}
            </Button>
          }
          title={ideaName}
          subheader={oneLineDes}
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
              R
            </Avatar>
          }
        />
        <CardContent>
          <Typography variant="body2" align="left" sx={{ mt: -3 }}>
            {userData.name}
          </Typography>

          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
              }}
            >
              <p>
                {!readMore ? postData.text.slice(0, 150) : postData.text}

                <Link onClick={handleReadMore}>{linkName}</Link>
              </p>
            </Typography>
          </CardContent>

          {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="soft">{tags.tag1}</Button>

          <Button variant="soft">{tags.tag2}</Button>

          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            {numFollow} Following
          </Typography>
        </CardActions>{" "}
      </Card>
    </div>
  );
};

export default PostCard;
