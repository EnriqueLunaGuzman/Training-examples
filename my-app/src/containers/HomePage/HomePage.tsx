import React, { Component } from 'react';

import Layout from '../../layouts/Layout';

class HomePage extends Component {

  render( ) {
    console.log(this.props)
    return (
      <Layout>
        <p>Home component</p>
      </Layout>
    );
  }
}

export default HomePage;