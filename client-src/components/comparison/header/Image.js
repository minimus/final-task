import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ({image, link}) {
  return (
    <div className="item-image">
      <NavLink to={link}>
        <img src={image}/>
      </NavLink>
    </div>
  )
}
