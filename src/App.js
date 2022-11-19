import React from "react";
import LeftNavBar from "./components/LeftNavBar";
import PostCard from "./components/postCard";
import RightNewsBar from "./components/RightNewsBar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="landingPage">
          <div className="LeftnavBar">
            <LeftNavBar />
          </div>
          <div className="postFeed">
            <PostCard />
          </div>
          <div className="newsFeed">
            <RightNewsBar />
          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;
