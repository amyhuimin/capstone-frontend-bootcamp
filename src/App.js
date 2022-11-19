import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
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

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div className="Navbar">Insert Navbar here</div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};
export default App;
