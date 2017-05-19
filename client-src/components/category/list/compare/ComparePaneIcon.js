import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

export default function ComparePaneIcon({ id, image, link, name }) {
  return (
    <NavLink to={link} data-id={id} title={name}>
      <img src={image} alt={name} />
    </NavLink>
  )
}

ComparePaneIcon.propTypes = {
  id: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
}
