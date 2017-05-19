/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import propTypes from 'prop-types'

export default function MenuBackItem({ main, onClick }) {
  return (
    <li className="back-panel" data-parent={main.parentid}>
      <span onClick={onClick} className="menu-back">
        <i className="material-icons">chevron_left</i> {main.keyValue}
      </span>
      <span onClick={onClick} className="menu-close">
        <i className="material-icons">clear</i>
      </span>
    </li>
  )
}

MenuBackItem.propTypes = {
  main: propTypes.objectOf(propTypes.any).isRequired,
  onClick: propTypes.func.isRequired,
}
