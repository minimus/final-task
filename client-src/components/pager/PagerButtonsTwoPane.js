import React from 'react'
import propTypes from 'prop-types'
import PagerButton from './PagerButton'

export default function PagerButtonsTwoPane({ base, category, pages }) {
  const pagesArrayFirst = [1, 2, 3, 4]
  const pagesArrayLast = []
  let i = pages - 3
  while (i <= pages) pagesArrayLast.push(i += 1)
  return (
    <span id="pager-buttons-pane">
      {pagesArrayFirst.map(idx =>
        <PagerButton base={base} category={category} page={idx} key={idx} />)}
      <span className="pager-group-divider">...</span>
      {pagesArrayLast.map(idx =>
        <PagerButton base={base} category={category} page={idx} key={idx} />)}
    </span>
  )
}

PagerButtonsTwoPane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  pages: propTypes.number.isRequired,
}
