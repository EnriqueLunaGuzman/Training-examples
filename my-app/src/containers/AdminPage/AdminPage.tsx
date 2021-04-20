import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';

class AdminPage extends Component {

  render( ) {
    return (
      <Layout list={['Users', 'Admin']}>
        <Switch>
          <Route path="/admin" exact render={() => <h3>Welcome to Admin!</h3>} />
          <Route path="/admin/users" exact render={() => <h3>Users Component</h3>} />
          <Route path="/admin/admin" exact render={() => <h3>Admin Component</h3>} />
        </Switch>
      </Layout>
    );
  }
}

export default AdminPage;