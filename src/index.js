import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import ModifyClassName from "./modifyClassName";
import * as serviceWorker from "./serviceWorker";

import Iconfont from "iconfontcn";

// Iconfont.config("i", "t-", "testfont");

Iconfont.init("font_2043983_w1m0lhxtor.js", "t-", "testfont");

// Iconfont.init("font_2043983_w1m0lhxtor.css", "t-", "testfont");

// Iconfont.init("//at.alicdn.com/t/font_2043983_w1m0lhxtor.css", "t-", "testfont");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route
          path="/modify-className"
          render={(props) => <ModifyClassName {...props} />}
        />
        <Route path="/" render={(props) => <App {...props} />} />
      </Switch>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
