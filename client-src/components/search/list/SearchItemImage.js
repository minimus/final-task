import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function SearchItemImage({ image, link }) {
  const picture = (Array.isArray(image)) ? image[0] : image
  return (
    <NavLink to={link} className="image-link">
      <img className="search-item-image" src={picture} alt={image} />
    </NavLink>
  )
}

SearchItemImage.propTypes = {
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}
