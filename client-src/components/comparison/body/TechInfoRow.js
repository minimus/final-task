import React from 'react'
import propTypes from 'prop-types'
import TechInfoCaption from './TechInfoCaption'
import TechInfoItem from './TechInfoItem'

export default function TechInfoRow({ caption, items }) {
  return (
    <div className="tech-info-row">
      <TechInfoCaption text={caption} />
      {items.map(e => <TechInfoItem text={e.text} found={e.found} key={e.id} />)}
    </div>
  )
}

TechInfoRow.propTypes = {
  caption: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
}
