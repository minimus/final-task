import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

class MenuPane extends Component {

  menuItem = (item, idx) => {
    if (item.children.length) {
      return (
        <li key={idx}>
          {item.keyValue}
          <ul>{item.children.map((e, i) => this.menuItem(e, i))}</ul>
        </li>
      )
    }
    return (
      <li key={idx}>
        <NavLink activeStyle={{ color: '#f1413d' }} to={`/category/${item.id}/1`}>
          {item.keyValue}
        </NavLink>
      </li>
    )
  }

  render() {
    return (
      <div className="home-menu-bar">
        <ul key={0}>
          {this.menuItem(this.props.pane, this.props.pane.id)}
        </ul>
      </div>
    )
  }

}

MenuPane.propTypes = {
  pane: propTypes.objectOf(propTypes.any).isRequired,
}

export default MenuPane
