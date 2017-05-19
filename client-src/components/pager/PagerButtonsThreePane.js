import React from 'react'
import propTypes from 'prop-types'
import PagerButton from './PagerButton'

export default function PagerButtonsTwoPane({ base, category, page, pages }) {
  const pagesArrayFirst = [1, 2, 3]
  const pagesArrayMiddle = [page - 1, page, page + 1]
  const pagesArrayLast = [pages - 2, pages - 1, pages]
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

PagerButtonsTwoPane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
}
