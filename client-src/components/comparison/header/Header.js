import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ({text, link}) {
  return (
    <h1 className="item-header">
      <NavLink to={link}>{text}</NavLink>
    </h1>
  )
}
