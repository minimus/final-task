import React from 'react'
import propTypes from 'prop-types'

export default function FacetsClearButton({ onClear }) {
  return (
    <button className="facets-clear-button" onClick={onClear}>
        Очистить фильтры
      </button>
  )
}

FacetsClearButton.propTypes = {
  onClear: propTypes.func.isRequired,
}
