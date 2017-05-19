/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import propTypes from 'prop-types'

export default function MenuButton({ id, onClick }) {
  return (
    <i
      id="left-menu"
      data-id={id}
      className="material-icons md-48 a-left-icon menu-trigger"
      onClick={onClick}
    >menu</i>
  )
}

MenuButton.propTypes = {
  id: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
}
