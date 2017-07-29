import React from 'react'
import propTypes from 'prop-types'

export default function ComparisonHeader({ names }) {
  return (
    <h1 className="comparison-header">
      {names.map(e => e.split(',')[0]).join(' * ')}
    </h1>
  )
}

ComparisonHeader.propTypes = {
  names: propTypes.arrayOf(propTypes.string).isRequired,
}
