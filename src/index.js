import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { AlertState } from "./components/Alert/context/AlertState";

ReactDOM.render(
  <React.StrictMode>
    <AlertState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AlertState>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
