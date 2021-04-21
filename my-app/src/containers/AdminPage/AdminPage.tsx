import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';

class AdminPage extends Component {

  list = [
    {text: 'Users', path: '/admin/users'}, 
    {text: 'Roles', path: '/admin/roles'}
  ];

  render( ) {
    return (
      <Layout list={this.list} defaultSelected={-1}>
        <Switch>
          <Route path="/admin" exact render={() => <h3>Welcome to Admin!</h3>} />
          <Route path="/admin/users" exact render={() => <h3>Users Component</h3>} />
          <Route path="/admin/roles" exact render={() => <h3>Roles Component</h3>} />
        </Switch>
      </Layout>
    );
  }
}

export default AdminPage;