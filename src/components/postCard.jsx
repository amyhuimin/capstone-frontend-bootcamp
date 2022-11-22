import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { postData } from "../PostSeedData";
import ReadMore from "./ReadMore";
import FollowButton from "./FollowButton";
import { userData } from "../userData";

const PostCard = (content) => {
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          action={<FollowButton />}
          title={postData.ideaName}
          subheader={postData.oneLineDes}
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
              {userData.imgURL}
            </Avatar>
          }
        />
        <CardContent>
          <Typography variant="body2" align="left" sx={{ mt: -3 }}>
            {userData.user}
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
              <ReadMore content="text text text text text" />
            </Typography>
          </CardContent>
          {postData.imgURL ? (
            <CardMedia
              component="img"
              height="194"
              image={postData.imgURL}
              alt="image"
            />
          ) : null}
          ;
          {postData.videoURL ? (
            <CardMedia
              component="video"
              height="194"
              src={postData.videoURL}
              alt="video"
            />
          ) : null}
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="soft">{postData.tag1}</Button>
          <Button variant="soft">{postData.tag2}</Button>
          <Button variant="soft">{postData.tag3}</Button>

          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            {postData.numFollow} Following
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCard;
