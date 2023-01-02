import axios from "axios";
const BackEndUrl = "http://localhost:4000";

async function NewsQuery(props) {
  const newSourceURL = `https://newsapi.org/v2/top-headlines?country=${props}&category=business&category=technology&apiKey=fc313bcc2c334b46a7de0f9a08874d47`;
  const data = axios.get(newSourceURL);
  return data;
}

//Newsfeed Posts get all
async function PostsQuery() {
  const data = axios.get(BackEndUrl + "/");
  return data;
}

//Posts upload
async function PostAPost() {}

//LeftNavBar get all
async function LeftNavQuery() {
  const data = axios.get(BackEndUrl + "/progressingideas");
  return data;
}

//Ideas upload
async function PostAnIdea(props) {
  const { data } = await axios.post(`${BackEndUrl}/idea/post`, props.newIdea);
  const { user } = await axios.put(
    `${BackEndUrl}/User/update`,
    {
      Id: props.newIdea.UserId,
      Ideas: props.newIdea.IdeaId,
    },
    {
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
    }
  );
  return;
}

async function GetAPost(props) {
  const { data } = await axios.get(`${BackEndUrl}/get/${props.queryKey[1]}`);
  return data;
}

async function GetAnIdea(props) {
  const { data } = await axios.get(
    `${BackEndUrl}/idea/get/${props.queryKey[1]}`
  );
  console.log(data);
  return data;
}

async function getUserIdeas(props) {
  const { data } = await axios.get(
    `${BackEndUrl}/idea/all/${props.queryKey[1].UserId}`
  );
  return data;
}

//S3 image upload
async function uploadImage(props) {
  const formData = new FormData();
  formData.append("file", props[0]);
  const { data } = await axios.post(`${BackEndUrl}/uploadimage`, formData);
  const { url } = data;
  return url;
}

async function getCurrentUser(props) {
  const { data } = await axios.get(`${BackEndUrl}/User/${props.data}`, {
    headers: {
      Authorization: `Bearer ${props.accessToken}`,
    },
  });
  return data;
}

async function makeNewUser(props) {
  const { data } = await axios.post(
    `${BackEndUrl}/User/`,
    {
      UserEmail: props.UserEmail,
      UserName: props.UserName,
      ProfilePicURL: props.ProfilePicURL,
    },
    {
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
    }
  );
  return data;
}

export {
  NewsQuery,
  PostsQuery,
  LeftNavQuery,
  PostAPost,
  uploadImage,
  PostAnIdea,
  getCurrentUser,
  makeNewUser,
  GetAPost,
  GetAnIdea,
  getUserIdeas,
};
