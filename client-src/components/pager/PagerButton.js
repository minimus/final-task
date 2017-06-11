import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

export default function PagerButton({ base, category, page }) {
  return (
    <NavLink
      to={`/${base}/${category}/${page}`}
      activeClassName="active"
      activeStyle={{ color: '#be3131' }}
    >
      {page}
    </NavLink>
  )
}

PagerButton.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
}

// export default PagerButton
