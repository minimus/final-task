import React from 'react'
import Header from './Header'

export default function ({items}) {
  return (
    <div className="header-row">
      <div className="empty-cell"/>
      {items.map((e, i) =>
        <div className="header-cell" key={i}>
          <Header text={e.name} link={`/offer/${e.id}`}/>
        </div>)}
    </div>
  )
}
