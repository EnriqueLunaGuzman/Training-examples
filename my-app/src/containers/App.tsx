import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import AdminPage from '../containers/AdminPage/AdminPage';

class App extends Component {

  render( ) {
    return (
      <MasterLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </MasterLayout>
    );
  }
}

export default App;
