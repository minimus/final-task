import React from 'react'
import PagerButtonFirst from './PagerButtonFirst'
import PagerButtonPrev from './PagerButtonPrev'

export default function PagerButtonsFirstPane({base, category, page, pages}) {
  return (
    <span id="pager-first-buttons-pane">
      <PagerButtonFirst base={base} category={category} page={1} key={1} />
      <PagerButtonPrev base={base} category={category} page={Math.max(1, page - 1)} key={2} />
    </span>
  )
}
