import React from "react";
import ReactDOM from "react-dom/client";
import "./header.css";
import "./about.css";
import "./card.css";
import "./footer.css";
import App from "./components/App";
import reportWebVitals from "./components/reportWebVitals";

<script
  src="https://kit.fontawesome.com/6bc7e0b7f0.js"
  crossorigin="anonymous"
></script>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
