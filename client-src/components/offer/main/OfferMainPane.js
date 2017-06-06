import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Preview from './preview/Preview'
import MajorInfo from './info/OfferMajorInfo'
import OfferBadge from './badge/OfferBadge'

class OfferMainPane extends PureComponent {
  render() {
    return (
      <section className="offer-main-pane">
        <Preview
          pictures={this.props.pictures}
          selectedPicture={this.props.selectedPicture}
          onClick={this.props.onClick}
          onOpen={this.props.onDialogOpen}
        />
        <MajorInfo data={this.props.data} info={this.props.info} />
        <OfferBadge data={this.props.data} />
      </section>
    )
  }
}

OfferMainPane.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selectedPicture: propTypes.string.isRequired,
  info: propTypes.arrayOf(propTypes.object).isRequired,
  onClick: propTypes.func.isRequired,
  onDialogOpen: propTypes.func.isRequired,
}

export default OfferMainPane
