import React from 'react'
import propTypes from 'prop-types'
import PagerButtonLast from './PagerButtonLast'
import PagerButtonNext from './PagerButtonNext'

export default function PagerButtonsLastPane({ base, category, page, pages }) {
  return (
    <span id="pager-last-buttons-pane">
      <PagerButtonNext
        base={base}
        category={category}
        page={Math.min(page + 1, pages)}
        key={1}
      />
      <PagerButtonLast
        base={base}
        category={category}
        page={pages}
        key={2}
      />
    </span>
  )
}

PagerButtonsLastPane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
}
