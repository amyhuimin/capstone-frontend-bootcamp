import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player/lazy";
import Button from "@mui/material/Button";
import ReadMore from "./ReadMore";
import FollowButton from "./FollowButton";

const PostCard = (content) => {
  console.log(content.content);
  return (
    <div className="postCard">
      <Card className="cards">
        <CardHeader
          action={<FollowButton />}
          avatar={<Avatar src={content.content.imgURL} />}
          title={content.content.user}
          style={{ padding: "3% 0 2% 5%" }}
        />
        <CardHeader
          className="postCardHeaders"
          title={content.content.ideaName}
          subheader={content.content.oneLiner}
          style={{ padding: "0", paddingLeft: "5%", paddingRight: "5%" }}
        />

        <CardContent
          style={{ padding: "0", paddingLeft: "5%", paddingRight: "5%" }}
        >
          <Typography variant="body2" color="text.secondary">
            Request Type: {content.content.requestType}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
            }}
          >
            {content.content.text != undefined ? (
              <ReadMore
                style={{ margin: "0" }}
                content={content.content.text}
              />
            ) : (
              <></>
            )}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          height="194"
          image={content.content.imgURL}
          alt="image"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ReactPlayer
            url={content.content.videoURL}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
            config={{
              youtube: {
                playerVars: { controls: 1 },
              },
            }}
          />
        </div>

        <CardActions disableSpacing>
          <Button variant="soft">{content.content.tag1}</Button>
          <Button variant="soft">{content.content.tag2}</Button>
          <Button variant="soft">{content.content.tag3}</Button>

          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            {content.content.numberFollowers} Following
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCard;
