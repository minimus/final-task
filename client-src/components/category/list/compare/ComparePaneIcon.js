import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ({id, image, link, name}) {
  return (
    <NavLink to={link} data-id={id} title={name}>
      <img src={image}/>
    </NavLink>
  )
}
