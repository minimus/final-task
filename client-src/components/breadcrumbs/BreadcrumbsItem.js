import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ({id, link, name, last}) {
  if (last) {
    return (
      <span id={id} className="breadcrumbs-item">
        {name}
      </span>
    )
  }
  return (
    <span id={id} className="breadcrumbs-item">
      <NavLink exact to={link}>
        {name}
      </NavLink>
    </span>
  )
}
