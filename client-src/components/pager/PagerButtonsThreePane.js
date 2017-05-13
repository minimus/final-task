import React from 'react'
import PagerButton from './PagerButton'

export default function PagerButtonsTwoPane({base, category, page, pages}) {
  const
    pagesArrayFirst = [1,2,3],
    pagesArrayMiddle = [page - 1, page, page + 1],
    pagesArrayLast = [pages - 2, pages - 1, pages]
  return (
    <span id="pager-buttons-pane">
      {pagesArrayFirst.map(i => <PagerButton base={base} category={category} page={i} key={i} />)}
      <span className="pager-group-divider">...</span>
      {pagesArrayMiddle.map(i => <PagerButton base={base} category={category} page={i} key={i} />)}
      <span className="pager-group-divider">...</span>
      {pagesArrayLast.map(i => <PagerButton base={base} category={category} page={i} key={i} />)}
    </span>
  )
}
