import React from "react";
import { render } from "react-dom";
import "babel-polyfill";

import App from "./components/App";

import { Provider } from "react-redux";
import store from "./store";

import "./styles/style.styl";

const router = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(router, document.getElementById("root"));

