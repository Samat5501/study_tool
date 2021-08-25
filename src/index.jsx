import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./styles.css";
import 'antd/dist/antd.css';
import { createStore } from "redux";
import { infoReducer } from "./components/store/reducers";

const store = createStore(infoReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

