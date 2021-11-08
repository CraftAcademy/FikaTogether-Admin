import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import store from "./state/store/configureStore";


if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:3000";
} else {
  axios.defaults.baseURL = "https://fika-together.herokuapp.com";
}

window.store = store;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
