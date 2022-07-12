import React from 'react';
import ReactDOM from 'react-dom"; 
import './index.css';
import App from"./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://znl8aezejcxl.usemoralis.com:2053/server" appId="7DMWCCjG3RlayWi1EGhruO1o03BQgBYCuhs9LUlV">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
  