import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollTop from "./components/ui/Modal/ScrollTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <BrowserRouter>
      <App />
       <ScrollTop/>
    </BrowserRouter>
  </React.StrictMode>
);
