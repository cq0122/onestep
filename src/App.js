import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Icon } from "iconfontcn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Icon code="offer" size="20" color="red" />
          <Icon code="icecream" size="100" />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
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
