import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "styles/index.css";
import App from "pages/App";
import { store } from "store";
// import Store from "store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <Store> */}
      <App />
      {/* </Store> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);
