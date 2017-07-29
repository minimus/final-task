import React from 'react'
import propTypes from 'prop-types'
import PagerButton from './PagerButton'

export default function PagerButtonsOnePane({ base, category, pages }) {
  const pagesArray = []
  let i = 1
  while (i <= pages) {
    pagesArray.push(i)
    i += 1
  }
  return (
    <span id="pager-buttons-pane">
      {pagesArray.map(idx => <PagerButton base={base} category={category} page={idx} key={idx} />)}
    </span>
  )
}

PagerButtonsOnePane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  pages: propTypes.number.isRequired,
}
