import React from 'react'
import propTypes from 'prop-types'
import Facets from '../../category/facets/Facets'

export default function SearchFacets({ facets, selectedFacets, onClear, onFacetChange }) {
  return (
    <Facets
      facets={facets}
      selectedFacets={selectedFacets}
      onClear={onClear}
      onFacetChange={onFacetChange}
    />
  )
}

SearchFacets.propTypes = {
  facets: propTypes.arrayOf(propTypes.object).isRequired,
  selectedFacets: propTypes.arrayOf(propTypes.object).isRequired,
  onClear: propTypes.func.isRequired,
  onFacetChange: propTypes.func.isRequired,
}
