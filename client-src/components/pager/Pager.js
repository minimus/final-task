import React from 'react'
import propTypes from 'prop-types'
import PagerButtons from './PagerButtons'
import './pager.css'

export default function Pager({ base, category, page, pages }) {
  return (
    <nav id="pager" className="pager-container">
      <PagerButtons
        base={base}
        category={category}
        page={page}
        pages={pages}
      />
    </nav>
  )
}

Pager.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
}
