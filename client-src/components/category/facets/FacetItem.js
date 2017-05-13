import React from 'react'

export default function ({id, name, value, field, selected, onChange}) {
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
