import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';
import Inbox from '../../components/inbox/inbox';
import EmailDatail from '../../components/inbox/EmailDetail';

class HomePage extends Component {

  list = [
    {text: 'Inbox', path: '/home/inbox'}, 
    {text: 'Starred', path: '/home/starred'}
  ];

  render( ) {
    return (
      <Layout list={this.list} defaultSelected={-1}> 
        <Switch>
          <Route path="/" exact render={() => <h3>Welcome to Home!</h3>} />
          <Route path="/home/inbox/:id" exact component={EmailDatail} />
          <Route path="/home/inbox" component={Inbox} />
          <Route path="/home/starred" exact render={() => <h3>Starred Component</h3>} />
        </Switch>
      </Layout>
    );
  }
}

export default HomePage;