import React from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';

// Contrived example to show how one might use Flow type annotations

function countTo(n) {
  const a = [];
  for (let i = 0; i < n; i++ ) {
    a.push(i + 1);
  }
  return a.join(', ');
}

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title} menu={this.props.menu}>
        <h1>{this.props.title}</h1>
        <p>Добро пожаловать в {this.props.title}</p>
        <p>
          I can count to 10:
          {countTo(10)}
        </p>
      </Layout>
    );
  }
}

Index.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.string
};

export default Index;