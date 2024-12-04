import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");

// Gắn kết React với DOM và cung cấp store Redux cho toàn bộ ứng dụng
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
