import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Price from './Price'

class PriceRow extends PureComponent {
  render() {
    return (
      <div className="price-row">
        <div className="empty-cell" />
        {this.props.items.map(e =>
          (<div className="price-cell" key={e.id}>
            <Price price={e.price} />
          </div>))}
      </div>
    )
  }
}

PriceRow.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}

export default PriceRow
