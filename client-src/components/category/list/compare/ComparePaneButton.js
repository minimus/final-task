import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ({disabled, link}) {
  if (disabled) return (
    <div className="compare-pane-button disabled">
      Сравнить
    </div>
  )
  return (
    <div className="compare-pane-button">
      <NavLink to={link}>Сравнить</NavLink>
    </div>
  )
}
