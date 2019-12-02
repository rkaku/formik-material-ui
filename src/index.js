import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "styles/index.css";
import App from "pages/App";
import Store from "store";

ReactDOM.render(
  <BrowserRouter>
    <Store>
      <App />
    </Store>
  </BrowserRouter>,
  document.getElementById("root"),
);
