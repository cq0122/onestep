import React from "react";
import "./App.css";

function App() {
  const emoji = (
    <span role="img" aria-labelledby="panda1">
      😀
    </span>
  );
  const emoji2 = (
    <React.Fragment>
      {emoji}
      {emoji}
    </React.Fragment>
  );
  return (
    <div>
      <div className="header">
        <img src="/step.png" alt="" />{" "}
        <a
          href="https://github.com/cq0122"
          target="_blank"
          rel="noopener noreferrer"
        >
          cq0122
        </a>
      </div>

      <div className="box">
        <div className="tl">{emoji}</div>
        <div className="tc">{emoji}</div>
        <div className="tr">{emoji}</div>

        <div className="cl">{emoji}</div>
        <div className="cc">{emoji}</div>
        <div className="cr">{emoji}</div>

        <div className="bl">{emoji}</div>
        <div className="bc">{emoji}</div>
        <div className="br">{emoji}</div>
      </div>

      <div className="box">
        <div className="t2">{emoji2}</div>
        <div className="c2">{emoji2}</div>
        <div className="b2">{emoji2}</div>

        <div className="l2">{emoji2}</div>
        <div className="c2-1">{emoji2}</div>
        <div className="r2">{emoji2}</div>

        <div className="hide-border"></div>
        <div className="l2-r">{emoji2}</div>
        <div className="r2-l">{emoji2}</div>
      </div>
    </div>
  );
}

export default App;
