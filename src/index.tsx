import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Iconfont from "iconfontcn";

/* symbol引用 支持多色图标*/
Iconfont.init("font_2043983_piz5r4nwk6f.js", "t-", "testfont");

/* font-class引用 */
Iconfont.init("font_2043983_piz5r4nwk6f.css", "t-", "testfont");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
