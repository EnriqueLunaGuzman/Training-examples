import React, { Component } from 'react';

import Layout from '../../layouts/Layout';

class HomePage extends Component {

  render( ) {
    // console.log('HomePage props : ', this.props)
    return (
      <Layout>
        <p>Home component</p>
        {/* <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" component={AdminPage} />
        </Switch> */}
      </Layout>
    );
  }
}

export default HomePage;