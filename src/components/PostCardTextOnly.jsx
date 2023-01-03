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
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "View Comments" : null,
  marginLeft: "auto",
  fontSize: "small",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCardTextOnly = (content) => {
  console.log(content.content);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="postCard">
      <div>
        <Card className="cards">
          <CardHeader
            action={<FollowButton />}
            avatar={<Avatar src={content.content.ImgURL} />}
            title={content.content.User}
            style={{ padding: "3% 0 2% 5%" }}
          />
          <CardHeader
            className="postCardHeaders"
            title={content.content.IdeaName}
            subheader={content.content.OneLiner}
            style={{ padding: "0", paddingLeft: "5%", paddingRight: "5%" }}
          />

          <CardContent
            style={{ padding: "0", paddingLeft: "5%", paddingRight: "5%" }}
          >
            <Typography variant="body2" color="text.secondary">
              Request Type: {content.content.RequestType}
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
              {content.content.Text != undefined ? (
                <ReadMore
                  style={{ margin: "0" }}
                  content={content.content.Text}
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
            image={content.content.ImgURL}
            alt="image"
          />
        ) : null}
        {content.content.VideoURL ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ReactPlayer
              url={content.content.VideoURL}
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
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            View Comments
          </ExpandMore>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            comments
          </Collapse>
        </Card>
      </div>
    </div>
  );
};

export default PostCardTextOnly;
