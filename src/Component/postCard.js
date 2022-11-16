import React, { useState, useEffect } from "react";
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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
    text: "test test",
    videoURL: "",
    pictureURL: "",
  });
  const [tags, setTags] = useState({
    tag1: "",
    tag2: "",
    tag3: "",
  });
  const [numFollow, setNumFollow] = useState(0);
  const [followPost, setFollowPost] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //add axios.get to get post data
  //add axios.post to send new comments

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="followPost">
              <MoreVertIcon />
            </IconButton>
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
          <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                {postData.text}
              </Typography>
            </CardContent>
          </Collapse>
          {/* <CardActions disableSpacing> */}
          <CardActions>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="tag">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="tag">
            <ShareIcon />
          </IconButton>
          {/*  <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              bgcolor: "background.level1",
            }}
          > */}
          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            6.3k views
          </Typography>
          {/*   <Divider orientation="vertical" /> */}
          {/* </CardOverflow> */}
        </CardActions>
        {/*  <Divider inset="context" /> */}
      </Card>
    </div>
  );
};

export default PostCard;
