import React, {Component} from 'react'
import OfferElements, {OfferElementsWithLoadingBar} from './OfferElements'
import './offer.css'

class Offer extends Component {
  render() {
    return (
      <OfferElementsWithLoadingBar
        isLoading={!this.props.data}
        {...this.props}
      />
    )
  }
}

export default Offer