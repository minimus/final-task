import React from 'react'
import propTypes from 'prop-types'
import Header from './Header'

export default function HeaderRow({ items }) {
  return (
    <div className="header-row">
      <div className="empty-cell" />
      {items.map(e =>
        (<div className="header-cell" key={e.id}>
          <Header text={e.name} link={`/offer/${e.id}`} />
        </div>))}
    </div>
  )
}

HeaderRow.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}
