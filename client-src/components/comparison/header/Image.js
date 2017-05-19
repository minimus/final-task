import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Image({ image, link }) {
  return (
    <div className="item-image">
      <NavLink to={link}>
        <img src={image} alt={image} />
      </NavLink>
    </div>
  )
}

Image.propTypes = {
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}
