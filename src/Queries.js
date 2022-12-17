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

//Ideas upload
async function PostNIdea() {}

//S3 image upload
async function uploadImage(props) {
  const formData = new FormData();
  formData.append("file", props[0]);
  const { data } = await axios.post(`${BackEndUrl}/uploadimage`, formData);
  const { url } = data;
  return url;
}

export { NewsQuery, PostsQuery, PostAPost, uploadImage, PostNIdea };
