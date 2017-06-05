import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class BreadcrumbsItem extends PureComponent {
  render() {
    if (this.props.last) {
      return (
        <span id={this.props.id} className="breadcrumbs-item">
          {this.props.name}
        </span>
      )
    }
    return (
      <span id={this.props.id} className="breadcrumbs-item">
        <NavLink exact to={this.props.link}>
          {this.props.name}
        </NavLink>
      </span>
    )
  }
}

BreadcrumbsItem.propTypes = {
  id: propTypes.number.isRequired,
  link: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  last: propTypes.bool.isRequired,
}

export default BreadcrumbsItem
