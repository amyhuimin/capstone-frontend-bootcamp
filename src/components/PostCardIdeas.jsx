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
import Comments from "./Comments";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import "./cssFiles/Posting.css";

const TagButton = styled(Button)({
  textTransform: "none",
  fontSize: 14,
  color: "#FFCE35",
  fontWeight: "bold",
});

const PostCardIdeas = (content) => {
  return (
    <div className="postCard">
      <div>
        <Card className="cards">
          <CardHeader
            action={<FollowButton />}
            avatar={<Avatar src={content.content.ImgURL} />}
            title={content.content.User}
            style={{ padding: "3% 5% 2% 5%" }}
          />
          <CardHeader
            className="postCardHeaders"
            title="NEW IDEA IS LIVE!"
            style={{ padding: "0", paddingLeft: "5%", paddingRight: "5%" }}
          />

          <CardContent
            style={{
              padding: "0",
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "3%",
              paddingTop: "2%",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontSize: "15px" }}>
              <b>Idea:</b> {content.content.IdeaName}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                fontSize: "15px",
              }}
            >
              <b>Description: </b>
              {content.content.OneLiner}
              {/* /* != undefined ? (
              <ReadMore
                style={{ margin: "0" }}
                content={content.content.OneLiner}
              />
              ) : (<></>
              )  */}
            </Typography>
          </CardContent>
          <Divider variant="middle" />
          <div className="tagsSection">
            <div className="tagging">
              {content.content.Tag1 != null ? (
                <TagButton variant="soft">{content.content.Tag1}</TagButton>
              ) : null}
              {content.content.Tag2 != null ? (
                <TagButton variant="soft">{content.content.Tag2}</TagButton>
              ) : null}
              {content.content.Tag3 != null ? (
                <TagButton variant="soft">{content.content.Tag3}</TagButton>
              ) : null}
            </div>
            <div className="followingTag">
              <Typography
                level="body3"
                sx={{
                  fontWeight: "md",
                  color: "text.secondary",
                  padding: "7px",
                  fontSize: "14px",
                }}
              >
                {content.content.NumberFollowers} Following
              </Typography>
            </div>
          </div>
          <Divider variant="middle" />
          <Comments />
        </Card>
      </div>
    </div>
  );
};

export default PostCardIdeas;
