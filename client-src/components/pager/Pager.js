import React from 'react'
import PagerButtons from './PagerButtons'
import './pager.css'

export default function Pager({base, category, page, pages}) {
  return (
    <div id="pager" className="pager-container">
      <PagerButtons
        base={base}
        category={category}
        page={page}
        pages={pages}
      />
    </div>
  )
}
