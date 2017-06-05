import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchItemPrice extends PureComponent {
  render() {
    return (
      <div className="item-price">
        <span className="search-item-price">{this.props.price}</span>
        <span className="purchase-button">
          <Link to={this.props.url}>Купить</Link>
        </span>
      </div>
    )
  }
}

SearchItemPrice.propTypes = {
  price: propTypes.number.isRequired,
  url: propTypes.string.isRequired,
}

export default SearchItemPrice
