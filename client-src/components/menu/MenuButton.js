/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class MenuButton extends PureComponent {
  render() {
    return (
      <i
        id="left-menu"
        data-id={this.props.id}
        className="material-icons md-48 a-left-icon menu-trigger"
        onClick={this.props.onClick}
      >menu</i>
    )
  }
}

MenuButton.propTypes = {
  id: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
}

export default MenuButton
