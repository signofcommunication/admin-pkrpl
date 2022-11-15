import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./Provider/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <React.StrictMode>
        <Dashboard />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
