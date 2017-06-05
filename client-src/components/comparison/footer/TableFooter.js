import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import PurchaseButton from '../header/PurchaseButton'

class TableFooter extends PureComponent {
  render() {
    return (
      <div className="purchase-row">
        <div className="empty-cell" />
        {this.props.items.map(e =>
          (<div className="footer-cell" key={e.id}>
            <PurchaseButton link={e.url} />
          </div>))}
      </div>
    )
  }
}

TableFooter.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}

export default TableFooter
