import React from 'react'
import SortOrder from './SortOrder'
import './sort.css'

export default function SortOrderPane({sort, onChange}) {
  return (
    <div id="sort-order-pane">
      <SortOrder sort={sort} onChange={onChange} />
    </div>
  )
}
