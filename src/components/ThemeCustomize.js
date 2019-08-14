import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export default function ThemeCustomize(props) {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1026,
        xl: 1920
      }
    }
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
