import axios from "axios";

async function NewsQuery(props) {
  const newSourceURL = `https://newsapi.org/v2/top-headlines?country=${props}&category=business&category=technology&apiKey=fc313bcc2c334b46a7de0f9a08874d47`;
  const data = axios.get(newSourceURL);
  return data;
}

export { NewsQuery };
