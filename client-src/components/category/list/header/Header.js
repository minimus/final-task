import React from 'react'
import propTypes from 'prop-types'

export default function Header({ title, count }) {
  return <h1>{title} <span className="count">({count})</span></h1>
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
}
