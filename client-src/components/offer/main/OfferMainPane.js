import React from 'react'
import propTypes from 'prop-types'
import Preview from './preview/Preview'
import MajorInfo from './info/OfferMajorInfo'
import OfferBadge from './badge/OfferBadge'

export default
function OfferMainPane({ data, pictures, selectedPicture, info, onClick, onDialogOpen }) {
  return (
    <section className="offer-main-pane">
      <Preview
        pictures={pictures}
        selectedPicture={selectedPicture}
        onClick={onClick}
        onOpen={onDialogOpen}
      />
      <MajorInfo data={data} info={info} />
      <OfferBadge data={data} />
    </section>
  )
}

OfferMainPane.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selectedPicture: propTypes.string.isRequired,
  info: propTypes.arrayOf(propTypes.object).isRequired,
  onClick: propTypes.func.isRequired,
  onDialogOpen: propTypes.func.isRequired,
}
