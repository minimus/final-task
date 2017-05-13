import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ({name, link, description}) {
  return (
    <div className="item-description">
      <NavLink to={link}>
        <h1>{name}</h1>
      </NavLink>
      <p className="item-desc">{description}</p>
    </div>
  )
}
