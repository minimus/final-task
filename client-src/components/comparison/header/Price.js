import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class Price extends PureComponent {
  render() {
    return (
      <div className="price-item-wrapper">
        <span className="price-item">
          {this.props.price}
        </span>
      </div>

    )
  }
}

Price.propTypes = {
  price: propTypes.number.isRequired,
}

export default Price
