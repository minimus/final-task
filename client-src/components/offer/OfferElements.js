import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import WithLoadingBar from '../WithLoadingBar'
import LoadingBar from '../LoadingBar'
import OfferMainPane from './main'
import OfferDetailsPane from './details'
import PreviewDialog from './main/dialog'

class OfferElements extends PureComponent {
  render() {
    return (
      <section className="offer container">
        <OfferMainPane {...this.props} />
        <OfferDetailsPane {...this.props} />
        <LoadingBar loading={this.props.loading} />
        <PreviewDialog
          pictures={this.props.pictures}
          selected={this.props.selectedPicture}
          show={this.props.dialog}
          onClick={this.props.onClick}
          onClose={this.props.onDialogClose}
          onNavClick={this.props.onNavClick}
        />
      </section>
    )
  }
}

OfferElements.propTypes = {
  loading: propTypes.bool.isRequired,
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selectedPicture: propTypes.string.isRequired,
  dialog: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  onDialogClose: propTypes.func.isRequired,
  onNavClick: propTypes.func.isRequired,
}

export default OfferElements

export const OfferElementsWithLoadingBar = WithLoadingBar(OfferElements)
