import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IdeasPage from "./components/IdeasPage";
import TopNavBar from "./components/TopNavBar";
import CheckExistingUser from "./components/CheckExistingUser";

// import customtheme from "./style/theme"

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
    <Auth0Provider
      domain={"dev-oa1xn--2.us.auth0.com"}
      clientId={"r1hyr9OFqf6CnWGu0AviG3FwBLgtHX7V"}
      redirectUri={"http://localhost:3000/NewUserForm"}
      audience="https://Proj3/api"
      scope="read:current_user update:current_user_metadata"
    >
      <QueryClientProvider client={queryClient}>
        <div className="TopNavbar">
          <TopNavBar current={currentLocation.pathname} />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/NewUserForm" element={<CheckExistingUser />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Auth0Provider>
  );
};
export default App;
