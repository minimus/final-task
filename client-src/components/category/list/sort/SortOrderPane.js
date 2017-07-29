import React from 'react'
import propTypes from 'prop-types'
import SortOrder from './SortOrder'
import './sort.css'

export default function SortOrderPane({ sort, onChange }) {
  return (
    <aside id="sort-order-pane">
      <SortOrder sort={sort} onChange={onChange} />
    </aside>
  )
}

SortOrderPane.propTypes = {
  sort: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
}
