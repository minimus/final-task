import React from 'react'
import TechInfoCaption from './TechInfoCaption'
import TechInfoItem from './TechInfoItem'

export default function ({caption, items}) {
  return (
    <div className="tech-info-row">
      <TechInfoCaption text={caption}/>
      {items.map((e, i) => <TechInfoItem text={e.text} found={e.found} key={i}/>)}
    </div>
  )
}
