import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect() {
  return (
    
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
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
