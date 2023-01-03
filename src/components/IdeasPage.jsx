import RightNewsBar from "./RightNewsBar";
import "./cssFiles/IdeaPage.css";
import NewIdeaForm from "./NewIdeaForm";
import IdeasFeed from "./IdeasFeed";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../Queries";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FFCE35",
  "&:hover": {
    backgroundColor: "#fce4ec",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function IdeasPage() {
  const [UserId, setUserId] = useState("");
  const [userEmail, setUUID] = useState("");
  const { user, getAccessTokenSilently } = useAuth0();
  const { mutate } = useMutation(
    (props) => getCurrentUser(props), //choose a function for mutate to use
    {
      //mutation settings
      retry: false,
      onSuccess: (data) => {
        setUserId(data.Id);
      },
    }
  );

  useEffect(() => {
    if (user !== undefined) {
      setUUID(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (userEmail !== "") {
      getUserInfo();
    }
  }, [userEmail]);

  const getUserInfo = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });

    mutate({ data: userEmail, accessToken: accessToken }); //Props for the function
  };

  return (
    <div className="ideaPage">
      <div className="ideaFeed">
        <div className="postCard">
          <Card className="cards" style={{ padding: "3% 0 2% 5%" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for your ideas…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <NewIdeaForm />
          </Card>
        </div>
        <IdeasFeed UserId={UserId} />
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
}
