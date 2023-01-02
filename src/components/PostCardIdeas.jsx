import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReadMore from "./ReadMore";
import FollowButton from "./FollowButton";
import Comments from "./CommentsOld";

const PostCardIdeas = (content) => {
  return (
    <div className="postCard">
      <Card className="cards">
        <CardHeader
          action={<FollowButton />}
          avatar={<Avatar src={content.content.ImgURL} />}
          title={content.content.User}
          style={{ padding: "3% 0 2% 5%" }}
        />
        <CardHeader
          className="postCardHeaders"
          title="NEW IDEA IS LIVE!"
          style={{ padding: "0", paddingLeft: "5%", paddingRight: "5%" }}
        />

        <CardContent
          style={{ padding: "0", paddingLeft: "5%", paddingRight: "5%" }}
        >
          <Typography variant="subtitle2">
            {content.content.IdeaName}
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
            {content.content.OneLiner != undefined ? (
              <ReadMore
                style={{ margin: "0" }}
                content={content.content.OneLiner}
              />
            ) : (
              <></>
            )}
          </Typography>
        </CardContent>
        {/*  {content.content.imgURL ? (
          <CardMedia
            component="img"
            height="194"
            image={content.content.imgURL}
            alt="image"
          />
        ) : null}
        {content.content.videoURL ? (
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
        ) : null} */}
        <CardActions disableSpacing>
          <Button variant="soft">{content.content.Tag1}</Button>
          <Button variant="soft">{content.content.Tag2}</Button>
          <Button variant="soft">{content.content.Tag3}</Button>

          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            {content.content.NumberFollowers} Following
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCardIdeas;
