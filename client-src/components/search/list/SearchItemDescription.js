import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function SearchItemDescription({ name, link, description }) {
  return (
    <div className="item-description">
      <NavLink to={link}>
        <h1>{name}</h1>
      </NavLink>
      <p className="item-desc">{description}</p>
    </div>
  )
}

SearchItemDescription.propTypes = {
  name: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}
