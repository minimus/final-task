import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ({ image, link }) {
  const picture = (Array.isArray(image)) ? image[0] : image
  return (
    <NavLink to={link} className="image-link">
      <img className="search-item-image" src={picture} />
    </NavLink>
  )
}
