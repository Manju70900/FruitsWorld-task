import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import reducer, { initialState } from "./Apis/Reducer";
import { StateProvider } from "./Apis/StateContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);



