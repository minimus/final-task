import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function BreadcrumbsItem({ id, link, name, last }) {
  if (last) {
    return (
      <span id={id} className="breadcrumbs-item">
        {name}
      </span>
    )
  }
  return (
    <span id={id} className="breadcrumbs-item">
      <NavLink exact to={link}>
        {name}
      </NavLink>
    </span>
  )
}

BreadcrumbsItem.propTypes = {
  id: propTypes.number.isRequired,
  link: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  last: propTypes.bool.isRequired,
}
