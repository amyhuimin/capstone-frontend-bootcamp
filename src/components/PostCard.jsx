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
    <div className="PostCard">
      <Card>
        <CardHeader
          action={<FollowButton />}
          title={postData[1].ideaName}
          subheader={postData[1].oneLineDes}
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
              {userData[1].imgURL}
            </Avatar>
          }
        />
        <CardContent>
          <Typography variant="body2" align="left" sx={{ mt: -3 }}>
            {userData[1].user}
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
              <ReadMore content={postData[1].text} />
            </Typography>
          </CardContent>
          {postData[1].imgURL ? (
            <CardMedia
              component="img"
              height="194"
              image={postData[1].imgURL}
              alt="image"
            />
          ) : null}
          ;
          {postData[1].videoURL ? (
            <CardMedia
              component="video"
              height="194"
              src={postData[1].videoURL}
              alt="video"
            />
          ) : null}
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="soft">{postData[1].tag1}</Button>
          <Button variant="soft">{postData[1].tag2}</Button>
          <Button variant="soft">{postData[1].tag3}</Button>

          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            {postData[1].numberFollowers} Following
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCard;
