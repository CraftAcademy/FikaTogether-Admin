import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import store from "./state/store/configureStore";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { amber } from "@mui/material/colors";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:3000";
} else {
  axios.defaults.baseURL = "https://fika-together.herokuapp.com";
}

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark"),
    },
  },
});

const darkModeTheme = createTheme(getDesignTokens("dark"));

window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
