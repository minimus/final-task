import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function ComparePaneButton({ disabled, link }) {
  if (disabled) {
    return (
      <div className="compare-pane-button disabled">
      Сравнить
    </div>
    )
  }
  return (
    <div className="compare-pane-button">
      <NavLink to={link}>Сравнить</NavLink>
    </div>
  )
}

ComparePaneButton.propTypes = {
  disabled: propTypes.bool.isRequired,
  link: propTypes.string.isRequired,
}
