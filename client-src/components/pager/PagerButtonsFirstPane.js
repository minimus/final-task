import React from 'react'
import propTypes from 'prop-types'
import PagerButtonFirst from './PagerButtonFirst'
import PagerButtonPrev from './PagerButtonPrev'

export default function PagerButtonsFirstPane({ base, category, page }) {
  return (
    <span id="pager-first-buttons-pane">
      <PagerButtonFirst base={base} category={category} page={1} key={1} />
      <PagerButtonPrev base={base} category={category} page={Math.max(1, page - 1)} key={2} />
    </span>
  )
}

PagerButtonsFirstPane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
}
