import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from'./redux/state'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <App state={state}/>
</BrowserRouter>);

