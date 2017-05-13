import React from 'react';
import Layout from './layout';

class error extends React.Component {
  render() {
    return (
      <Layout title={'Error'} menu={''}>
        <h1>{this.props.error.message}</h1>
        <p>{this.props.error.status}</p>
        <ul>
          {JSON.stringify(this.props)}
        </ul>
      </Layout>
    );
  }
}

export default error;