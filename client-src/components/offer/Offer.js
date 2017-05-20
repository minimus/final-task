import React, { Component } from 'react'
import propTypes from 'prop-types'
import { OfferElementsWithLoadingBar } from './OfferElements'
import './offer.css'

class Offer extends Component {
  isLoading = () => (!this.props.data)

  render() {
    return (
      <OfferElementsWithLoadingBar
        isLoading={this.isLoading()}
        {...this.props}
      />
    )
  }
}

Offer.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Offer
