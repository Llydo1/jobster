import React from "react";
import App from "./App";
import "./index.css";
import "normalize.css";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </React.StrictMode>
);
