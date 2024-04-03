"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
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
  },
  headings: {
    fontFamily: "Lora",
    // sizes: {},
  },
});
