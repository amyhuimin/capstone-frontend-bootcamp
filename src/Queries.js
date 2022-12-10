import axios from "axios";

const BackEndUrl = "http://localhost:4000";

async function NewsQuery(props) {
  const newSourceURL = `https://newsapi.org/v2/top-headlines?country=${props}&category=business&category=technology&apiKey=fc313bcc2c334b46a7de0f9a08874d47`;
  const data = axios.get(newSourceURL);
  return data;
}

async function PostsQuery() {
  const data = axios.get(BackEndUrl + "/");
  return data;
}

export { NewsQuery, PostsQuery };
