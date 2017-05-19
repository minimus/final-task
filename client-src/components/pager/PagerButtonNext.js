import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

export default function PagerButtonNext({ base, category, page }) {
  return (
    <NavLink to={`/${base}/${category}/${page}`} activeClassName="active" activeStyle={{ color: '#be3131' }}>
      <i className="material-icons">chevron_right</i>
    </NavLink>
  )
}

PagerButtonNext.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
}
