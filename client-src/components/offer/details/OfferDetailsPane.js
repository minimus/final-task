import React from 'react'
import propTypes from 'prop-types'
import OfferDescription from './description/OfferDescription'
import OfferDetailInfo from './info/OfferDetailInfo'

export default function OfferDetailsPane({ data, params }) {
  return (
    <section className="offer-details-pane">
      <OfferDescription description={data.description} />
      <OfferDetailInfo params={params} />
    </section>
  )
}

OfferDetailsPane.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  params: propTypes.arrayOf(propTypes.object).isRequired,
}
