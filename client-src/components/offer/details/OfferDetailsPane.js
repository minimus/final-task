import React, { Component } from 'react'
import propTypes from 'prop-types'
import OfferDescription from './description'
import OfferDetailInfo from './info'

class OfferDetailsPane extends Component {
  render() {
    return (
      <div className="offer-details-pane">
        <OfferDescription description={this.props.data.description} />
        <OfferDetailInfo params={this.props.params} />
      </div>
    )
  }
}

OfferDetailsPane.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  params: propTypes.arrayOf(propTypes.object).isRequired,
}

export default OfferDetailsPane
