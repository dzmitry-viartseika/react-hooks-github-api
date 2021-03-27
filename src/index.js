import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { AlertState } from "./components/Alert/context/AlertState";
import { GithubState } from "./components/GitHub/context/GithubState";

ReactDOM.render(
  <React.StrictMode>
      <GithubState>
          <AlertState>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </AlertState>
      </GithubState>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
