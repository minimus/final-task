import React, {Component} from 'react'
import WithLoadingBar from '../WithLoadingBar'
import LoadingBar from '../LoadingBar'
import OfferMainPane from './main'
import OfferDetailsPane from './details'
import PreviewDialog from './main/dialog'

class OfferElements extends Component {
  render() {
    return (
      <section className="offer container">
        <OfferMainPane {...this.props}/>
        <OfferDetailsPane {...this.props}/>
        <LoadingBar loading={this.props.loading}/>
        <PreviewDialog
          pictures={this.props.pictures}
          selectedPicture={this.props.selectedPicture}
          show={this.props.dialog}
          onClick={this.props.onClick}
          onClose={this.props.onDialogClose}
          onNavClick={this.props.onNavClick}
        />
      </section>
    )
  }
}

export default OfferElements

export const OfferElementsWithLoadingBar = WithLoadingBar(OfferElements)
