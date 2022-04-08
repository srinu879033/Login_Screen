import React from "react";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
