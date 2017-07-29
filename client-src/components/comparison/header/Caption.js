import React from 'react'
import propTypes from 'prop-types'
import CaptionItem from './CaptionItem'

export default function Caption({ data }) {
  return (
    <div className="comparison-caption">
      <div className="comparison-caption-cell" />
      {data.map(e => <CaptionItem item={e} key={e.id} />)}
    </div>
  )
}

Caption.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
}
