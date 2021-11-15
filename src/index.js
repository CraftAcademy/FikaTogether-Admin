import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import store from "./state/store/configureStore";
import { Provider } from "react-redux";
import "./index.css"
import "./i18n"

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:3000";
} else {
  axios.defaults.baseURL = "https://fika-together.herokuapp.com";
}

window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
