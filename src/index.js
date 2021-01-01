import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom"

const root = document.getElementById("root")
var renderMethod
if (root && root.innerHTML !== "") {
  renderMethod = hydrate
} else {
  renderMethod = render
}
renderMethod(<App />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
