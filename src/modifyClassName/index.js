import React from "react";
import "./styles/lightStyle.less";
import "./styles/darkStyle.less";

class ModifyClassName extends React.Component {
  state = {
    theme: ""
  };

  changeTheme = () => {
    const { theme } = this.state;
    if (theme === "dark") {
      this.setState({ theme: "" });
    } else {
      this.setState({ theme: "dark" });
    }
    console.log(theme);
  };

  render() {
    document.title = "修改className";
    return (
      <div className={`${this.state.theme}`}>
        <div className="content" style={{ height: "100vh" }}>
          <button onClick={this.changeTheme}>更换主题</button>

          <p className="content-text">测试文本1</p>
          <p className="content-text">测试文本2</p>
          <p className="content-text">测试文本3</p>
          <p className="content-text">测试文本4</p>
        </div>
      </div>
    );
  }
}

export default ModifyClassName;
