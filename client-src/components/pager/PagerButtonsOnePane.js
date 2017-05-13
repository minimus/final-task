import React from 'react'
import PagerButton from './PagerButton'

export default function PagerButtonsOnePane({base, category, page, pages}) {
  const pagesArray = []
  let i = 1
  while (i <= pages) pagesArray.push(i++)
  return (
    <span id="pager-buttons-pane">
      {pagesArray.map(i => {
        return (
          <PagerButton base={base} category={category} page={i} key={i} />
        )
      })}
    </span>
  )
}
