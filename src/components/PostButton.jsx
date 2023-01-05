import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PostAPost, getCurrentUser } from "../Queries";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import { ideaData } from "../IdeaSeedData";

const ColorButton = styled(Button)(({ theme }) => ({
  //color: yellow[600],
  fontSize: 15,
  textTransform: "none",
  //justifyContent: "space-between",
  backgroundColor: yellow[300],
  "&:hover": {
    backgroundColor: yellow[600],
  },
}));

const PostButton = (props) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { data } = useQuery(["currentUser"], () =>
    getCurrentUser({
      data: user.email,
      accessToken: async () => await getUserInfo(),
    })
  );

  console.log(data);

  const [newPost, setnewPost] = useState({
    Date: new Date(),
    /* UserId: "", */
    User: data.UserName,
    /* IdeaId: "", */
    IdeaName: props.inputIdea,
    OneLiner: null,
    Text: props.inputText,
    ImgURL: props.inputUpload,
    VideoURL: null,
    RequestType: props.inputRequest,
    Tag1: props.inputTag1,
    Tag2: props.inputTag2,
    Tag3: props.inputTag3,
  });
  const { mutate } = useMutation((props) => PostAPost(props), {
    retry: false,
  });

  console.log("postButton", data);

  useEffect(() => {
    for (var i = 0; i < ideaData.length; i++) {
      if (props.inputIdea === ideaData[i].ideaName) {
        const newData = {
          Date: new Date(),
          /* UserId: "", */
          User: data.UserName,
          /* IdeaId: "", */
          IdeaName: props.inputIdea,
          OneLiner: ideaData[i].oneLiner,
          Text: props.inputText,
          ImgURL: props.inputUpload,
          VideoURL: null,
          RequestType: props.inputRequest,
          Tag1: props.inputTag1,
          Tag2: props.inputTag2,
          Tag3: props.inputTag3,
        };
        setnewPost(newData);
      }
    }
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ newPost: newPost });
    props.handleCloseChange(event.target.event);
  };

  const getUserInfo = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });
    return accessToken;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ColorButton
          variant="contained"
          endIcon={<SendIcon />}
          autoFocus
          type="submit"
        >
          Post!
        </ColorButton>
      </form>
    </div>
  );
};

export default PostButton;
