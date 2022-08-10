import React from 'react';
import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// function FetchTestAPI() {
//   const [apiRes, setApiRes] = useState("");

//   fetch("http://localhost:9000/testAPI")
//           .then(res => res.text())
//           .then(res => setApiRes(res));
//   console.log(apiRes)
//   return apiRes;
// }

// var temp = FetchTestAPI();

// var temp = "hello!"

root.render(
  // <StrictMode>
    <App />
    // {/* <FetchTestAPI /> */}
  // </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
