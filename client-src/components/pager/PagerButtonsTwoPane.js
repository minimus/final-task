import React from 'react'
import PagerButton from './PagerButton'

export default function PagerButtonsTwoPane({base, category, page, pages}) {
  const pagesArrayFirst = [1,2,3,4], pagesArrayLast = []
  let i = pages - 3
  while (i <= pages) pagesArrayLast.push(i++)
  return (
    <span id="pager-buttons-pane">
      {pagesArrayFirst.map(i => <PagerButton base={base} category={category} page={i} key={i} />)}
      <span className="pager-group-divider">...</span>
      {pagesArrayLast.map(i => <PagerButton base={base} category={category} page={i} key={i} />)}
    </span>
  )
}
