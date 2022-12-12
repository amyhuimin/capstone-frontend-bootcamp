import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { PostsQuery } from "./Queries";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import IdeasPage from "./components/IdeasPage";
import TopNavBar from "./components/TopNavBar";
// import customtheme from "./style/theme";

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

const App = () => {
  const currentLocation = useLocation();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div className="TopNavbar">
          <TopNavBar current={currentLocation.pathname} />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};
export default App;
