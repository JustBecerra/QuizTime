"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  colors: {
    deepBlue: [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#27E9F7",
      "#3550DC",
    ],
    red: [
      "#ff0000",
      "#ff0001",
      "#ff0002",
      "#ff0003",
      "#ff0004",
      "#ff0005",
      "#ff0006",
      "#ff0007",
      "#ff0008",
      "#ff0009",
      "#ff0010",
    ],
    yellow: [
      "#ffcc00",
      "#ffcc01",
      "#ffcc02",
      "#ffcc03",
      "#ffcc04",
      "#ffcc05",
      "#ffcc06",
      "#ffcc07",
      "#ffcc08",
      "#ffcc09",
    ],
  },
  headings: {
    fontFamily: "Lora",
  },
});
