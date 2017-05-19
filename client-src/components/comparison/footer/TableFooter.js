import React from 'react'
import propTypes from 'prop-types'
import PurchaseButton from '../header/PurchaseButton'

export default function TableFooter({ items }) {
  return (
    <div className="purchase-row">
      <div className="empty-cell" />
      {items.map(e =>
        (<div className="footer-cell" key={e.id}>
          <PurchaseButton link={e.url} />
        </div>))}
    </div>
  )
}

TableFooter.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}
