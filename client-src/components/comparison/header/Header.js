import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Header({ text, link }) {
  return (
    <h1 className="item-header">
      <NavLink to={link}>{text}</NavLink>
    </h1>
  )
}

Header.propTypes = {
  text: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}
