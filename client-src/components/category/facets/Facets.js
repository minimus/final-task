import React from 'react'
import propTypes from 'prop-types'
import FacetGroup from './FacetGroup'
import FacetsClearButton from './FacetsClearButton'

export default function FacetsSection({ facets, selectedFacets, onClear, onFacetChange }) {
  return (
    <section id="facets" className="facets-container">
      <FacetsClearButton onClear={onClear} />
      {facets.map((e, i) => {
        const idx = i + 1
        return (
          <FacetGroup
            facet={e}
            selectedFacets={selectedFacets}
            onChange={onFacetChange}
            key={idx}
          />
        )
      })}
      <FacetsClearButton onClear={onClear} />
    </section>
  )
}

FacetsSection.propTypes = {
  facets: propTypes.arrayOf(propTypes.object).isRequired,
  selectedFacets: propTypes.arrayOf(propTypes.object).isRequired,
  onClear: propTypes.func.isRequired,
  onFacetChange: propTypes.func.isRequired,
}
