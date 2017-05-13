import React, {Component} from 'react'
import Preview from './preview/Preview'
import MajorInfo from './info/OfferMajorInfo'
import OfferBadge from './badge/OfferBadge'

class OfferMainPane extends Component {
  render() {
    return (
      <div className="offer-main-pane">
        <Preview
          pictures={this.props.pictures}
          selectedPicture={this.props.selectedPicture}
          onClick={this.props.onClick}
          onOpen={this.props.onDialogOpen}
        />
        <MajorInfo {...this.props}/>
        <OfferBadge data={this.props.data}/>
      </div>
    )
  }
}

export default OfferMainPane
