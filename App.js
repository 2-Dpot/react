/*jshint esversion: 11 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('div', {data:222}, [React.createElement('h1', {data:111}, 'Hello World React 🚀'),
React.createElement('h1', {data:111}, 'Hello World React1')]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);