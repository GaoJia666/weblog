import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"; // 导入 Router
import store from "./store";
import App from "./App";
import "./mock/mock";
import "normalize.css"; // 引入 normalize.css
import "./style/common.less";
import 'antd/dist/reset.css'; 


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router> {/* 添加 Router 包裹 */}
      <div className="app">
        <App />
      </div>
    </Router>
  </Provider>
);