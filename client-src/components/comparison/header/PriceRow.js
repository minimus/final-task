import React from 'react'
import propTypes from 'prop-types'
import Price from './Price'

export default function PriceRow({ items }) {
  return (
    <div className="price-row">
      <div className="empty-cell" />
      {items.map(e =>
        (<div className="price-cell" key={e.id}>
          <Price price={e.price} />
        </div>))}
    </div>
  )
}

PriceRow.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}
