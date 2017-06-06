import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import OfferDescription from './description'
import OfferDetailInfo from './info'

class OfferDetailsPane extends PureComponent {
  render() {
    return (
      <section className="offer-details-pane">
        <OfferDescription description={this.props.data.description} />
        <OfferDetailInfo params={this.props.params} />
      </section>
    )
  }
}

OfferDetailsPane.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  params: propTypes.arrayOf(propTypes.object).isRequired,
}

export default OfferDetailsPane
