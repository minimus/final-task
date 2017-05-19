import React from 'react'
import propTypes from 'prop-types'

export default function FacetItem({ id, name, value, field, selected, onChange }) {
  return (
    <span className="facet-item">
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          className="facet-item"
          data-field={field}
          data-name={name}
          data-value={value}
          value={value}
          checked={selected}
          onChange={onChange}
        />
        {value}
      </label>
    </span>
  )
}

FacetItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  field: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
}
