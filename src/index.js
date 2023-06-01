//packages
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

//store
import store from "./store/store";

//components
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
