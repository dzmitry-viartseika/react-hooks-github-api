import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Alert from './components/Alert/Alert';
import routes from './routes/routes'
import './assets/scss/style.scss';

function App() {

  return (
      <>
          <Navbar />
          <div className="container pt-3">
              <Alert alert={{text: 'Alert'}}/>
              {
                  Object.values(routes).map(route =>
                      <Route
                          exact
                          key={route.component}
                          path={route.url}
                          component={route.component}
                      /> )}
          </div>
      </>
  );
}

export default App;
