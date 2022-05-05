import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import store from './app/store';
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import "./App.css";


ReactDOM.render(
  <TransactionsProvider>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  </TransactionsProvider>,
  document.getElementById("root"),
);