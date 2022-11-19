import React, { useState } from "react";
import { NewsQuery } from "../Queries.js";
import NewsCard from "./newsCard.jsx";
import "./cssFiles/rightNewsBar.css";
import "../App.css";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function RightNewsBar() {
  const [country, setCountry] = useState("sg");
  const { isLoading, data } = useQuery(["topheadlines", country], () =>
    NewsQuery(country)
  );
  if (isLoading) {
    return (
      <div className="rightNewsBar">
        <Box bgcolor="white">
          <div>is Loading</div>
        </Box>
      </div>
    );
  } else {
    const { articles } = data.data;
    return (
      <div className="rightNewsBar">
        <Box bgcolor="white" style={{ borderRadius: 2 }}>
          <div id="Countryselect">
            <Autocomplete
              id="country-select"
              options={countries}
              autoHighlight
              onChange={(event, option) =>
                setCountry(option.code.toLowerCase())
              }
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code})
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </div>
          <div className="newsbarscroll">
            {articles.map((article) => {
              return (
                <NewsCard
                  key={article.url}
                  url={article.url}
                  imgurl={article.urlToImage}
                  headline={article.description}
                />
              );
            })}
          </div>
        </Box>
      </div>
    );
  }
}

const countries = [
  { code: "CN", label: "China" },
  {
    code: "JP",
    label: "Japan",
  },
  { code: "KR", label: "Korea, Republic of" },
  { code: "NZ", label: "New Zealand" },
  { code: "SG", label: "Singapore" },
  {
    code: "TW",
    label: "Taiwan, Republic of China",
  },
  { code: "UA", label: "Ukraine" },
  { code: "US", label: "America, United States" },
];
export default RightNewsBar;
