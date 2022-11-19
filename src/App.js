import React from "react";
import LeftNavBar from "./components/LeftNavBar";
import {
  QueryClient,
  QueryClientProvider,
  ReactQueryDevtools,
} from "react-query";
import "./App.css";
import PostCard from "./Component/postCard";

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
    <div className="app">
      <LeftNavBar />
      <PostCard />
    </div>
    /* <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider> */
  );
}

export default App;
