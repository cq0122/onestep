import React from "react";
import "./App.css";
import { Icon } from "iconfontcn";

function App() {
  return (
    <div>
      <div className="header">
        <Icon className="logo" code="step" size="30" />
        <a
          href="https://github.com/cq0122"
          target="_blank"
          rel="noopener noreferrer"
        >
          cq0122
        </a>
      </div>
      <div className="icon-div">
        <Icon code="football" />
        <Icon code="small" />
        <Icon code="offer" color="red" />
        <Icon code="icecream" size="40" />
      </div>

      <div className="icon-div">
        <p>
          <img src="/img/1.jpg" alt="" height="500" />
        </p>
        <p>
          <img src="/img/2.jpg" alt="" height="500" />
        </p>
        <p>
          index.tsx中调用Iconfont初始化，Iconfont.init("font_2043983_piz5r4nwk6f.css",
          "t-", "testfont");
        </p>
      </div>
    </div>
  );
}

export default App;
