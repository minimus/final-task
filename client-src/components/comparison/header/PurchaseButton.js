import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

class PurchaseButton extends PureComponent {
  render() {
    return (
      <span className="purchase-button">
        <Link to={this.props.link}>
        Купить
        </Link>
      </span>
    )
  }
}

PurchaseButton.propTypes = {
  link: propTypes.string.isRequired,
}

export default PurchaseButton
