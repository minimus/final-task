import React from 'react'
import propTypes from 'prop-types'
import FacetItem from './FacetItem'
import FacetColorItem from './FacetColorItem'

export default function FacetGroup({ facet, selectedFacets, onChange }) {
  return (
    <div className="facet-group">
      <span className="facet-group-caption">
        {facet.facet}
      </span>
      <span className="facet-group-container">
        {facet.values.map((e, i) => {
          const selected = !!selectedFacets.find(el =>
            (el.field === facet.field &&
            el.name === facet.facet &&
            el.value === e))
          const idx = `${facet.id}_${i}`
          if (facet.view === 'color') {
            return (
              <FacetColorItem
                id={idx}
                name={facet.facet}
                value={e}
                field={facet.field}
                selected={selected}
                onChange={onChange}
                key={idx}
              />
            )
          }
          return (
            <FacetItem
              id={idx}
              name={facet.facet}
              value={e}
              field={facet.field}
              selected={selected}
              onChange={onChange}
              key={idx}
            />)
        })}
      </span>
    </div>
  )
}

FacetGroup.propTypes = {
  facet: propTypes.objectOf(propTypes.any).isRequired,
  selectedFacets: propTypes.arrayOf(propTypes.object).isRequired,
  onChange: propTypes.func.isRequired,
}
