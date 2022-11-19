import React from "react";
import LeftNavBar from "./components/LeftNavBar";
import PostCard from "./components/postCard";
import {
  QueryClient,
  QueryClientProvider,
  ReactQueryDevtools,
} from "react-query";
import "./App.css";

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnMount: "always",
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      cacheTime: 1000 * 30, //30 seconds
      refetchInterval: 1000 * 30, //30 seconds
      refetchIntervalInBackground: false,
      suspense: false,
      staleTime: 1000 * 30,
    },
    mutations: {
      retry: 2,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

function App() {
  return (
    // <QueryClientProvider client={queryClient} contextSharing={true}>
    <div className="landingPage">
      <LeftNavBar className="navBar" />
      <PostCard className="newsFeed" />
    </div>
    /* <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider> */
  );
}

export default App;
