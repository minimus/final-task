import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class Header extends PureComponent {
  render() {
    return (
      <h1 className="item-header">
        <NavLink to={this.props.link}>{this.props.text}</NavLink>
      </h1>
    )
  }
}

Header.propTypes = {
  text: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}

export default Header
