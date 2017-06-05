import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class Header extends PureComponent {
  render() {
    return (
      <h1>
        {this.props.title} <span className="count">({this.props.count})</span>
      </h1>
    )
  }
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
}

export default Header
