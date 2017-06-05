/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class MenuBackItem extends PureComponent {
  render() {
    return (
      <li className="back-panel" data-parent={this.props.main.parentid}>
        <span onClick={this.props.onClick} className="menu-back">
          <i className="material-icons">chevron_left</i> {this.props.main.keyValue}
        </span>
        <span onClick={this.props.onClick} className="menu-close">
          <i className="material-icons">clear</i>
        </span>
      </li>
    )
  }
}

MenuBackItem.propTypes = {
  main: propTypes.objectOf(propTypes.any).isRequired,
  onClick: propTypes.func.isRequired,
}

export default MenuBackItem
