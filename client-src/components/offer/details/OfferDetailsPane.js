import React from 'react'
import propTypes from 'prop-types'
import OfferDescription from './description'
import OfferDetailInfo from './info'

export default function OfferDetailsPane({ data, params }) {
  return (
    <div className="offer-details-pane">
      <OfferDescription description={data.description} />
      <OfferDetailInfo params={params} />
    </div>
  )
}

OfferDetailsPane.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  params: propTypes.arrayOf(propTypes.object).isRequired,
}
