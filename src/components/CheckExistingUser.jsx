import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../Queries";
import NewUserForm from "./NewUserForm";

const CheckExistingUser = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userEmail, setUUID] = useState("");
  const [userExists, setUserExisting] = useState(undefined);
  const { data, mutate } = useMutation((props) => getCurrentUser(props), {
    onError: () => setUserExisting(false),
    onSuccess: (data) => setUserExisting(true),
    retry: false,
  });

  async function checkUser() {
    const accessToken = await getAccessTokenSilently({
      audience: `https://Proj3/api`,
      scope: "read:current_user",
    });
    if (user !== undefined) {
      setUUID(user.email);
    }
    if (userEmail !== "" && userEmail !== undefined) {
      mutate({ data: userEmail, accessToken: accessToken });
    }
  }
  if (userExists === undefined) {
    checkUser();
    return <div>Loading ...</div>;
  } else if (userExists === true) {
    return <Navigate to="/" />;
  } else if (userExists === false) {
    return <NewUserForm ExistingUserSet={setUserExisting} />;
  }
};
export default CheckExistingUser;
// import { useAuth0 } from "@auth0/auth0-react";
// import { Navigate } from "react-router-dom";
// import * as React from "react";
// import { useMutation } from "@tanstack/react-query";
// import { getCurrentUser } from "../Queries";
// import NewUserForm from "./NewUserForm";

// const checkExistingUser = () => {
//   const { user, getAccessTokenSilently } = useAuth0();
//   const [userEmail, setUUID] = useState("");
//   const [userExists, setUserExisting] = useState(undefined);
//   const { data, mutate } = useMutation((props) => getCurrentUser(props), {
//     onError: () => setUserExisting(false),
//     onSuccess: (data) => CurrentUser(data),
//     retry: false,
//   });

//   const CurrentUser = (data) => {
//     setUserExisting(data.data);
//   };

//   async function checkUser() {
//     const accessToken = await getAccessTokenSilently({
//       audience: `https://Proj3/api`,
//       scope: "read:current_user",
//     });
//     if (user !== undefined) {
//       setUUID(user.email);
//     }
//     if (userEmail !== "" && userEmail !== undefined) {
//       mutate({ userEmail: userEmail, accessToken: accessToken });
//     }
//   }

//   if (userExists === undefined) {
//     checkUser();
//     return <div>Loading ...</div>;
//   } else if (userExists === true) {
//     return <Navigate to="/" />;
//   } else if (userExists === false) {
//     return <NewUserForm ExistingUserSet={setUserExisting} />;
//   }
// };

//
