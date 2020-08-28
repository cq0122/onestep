import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyIcon from "./myicon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* transform: "rotate(10deg)" */}
        <div className="iconDiv">
          <MyIcon code="arrow_left" />
          <MyIcon code="money" />
          <MyIcon code="pdf" />
          <MyIcon code="email" />
          <MyIcon code="patent" color="purple" />
          <MyIcon code="arrow_right" />
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyIcon code="icecream" size="256" /> */}
        </div>
        <ul style={{ textAlign: "left" }}>
          <li>
            less修改变量：
            <a
              className="App-link"
              href="./less-modifyvars/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              less modifyvars
            </a>
          </li>
          <li>
            加载不同css文件：
            <a
              className="App-link"
              href="./append-link/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              append link
            </a>
          </li>
          <li>
            修改className：
            <a
              className="App-link"
              href="./modify-className"
              target="_blank"
              rel="noopener noreferrer"
            >
              modify className
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
