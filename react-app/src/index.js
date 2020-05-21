import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import App from "./App";
import createRootReducer from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  undefined,
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunkMiddleware))
);

ReactDOM.render(
  <App history={history} store={store} />,
  document.getElementById("root")
);
