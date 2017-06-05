/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class MenuItem extends PureComponent {
  render() {
    const dataCat = (this.props.item.children.length) ? '#' : `/category/${this.props.item.id}/1`
    if (this.props.item.children.length) {
      return (
        <li
          key={this.props.item.id}
          data-category={dataCat}
          data-id={this.props.item.id}
        >
          <span onClick={this.props.onClick} className="menu-forward">
            {this.props.item.keyValue}
          </span>
          <span
            className="has-children menu-forward"
            onClick={this.props.onClick}
          >{this.props.item.children.length} <i
            className="material-icons"
          >chevron_right</i></span>
        </li>
      )
    }
    return (
      <li
        key={this.props.item.id}
        data-category={dataCat}
        data-id={this.props.item.id}
      >
        <span onClick={this.props.onClick}>
          <NavLink exact to={dataCat}>
            {this.props.item.keyValue}
          </NavLink>
        </span>
      </li>
    )
  }
}

MenuItem.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  onClick: propTypes.func.isRequired,
}

export default MenuItem
