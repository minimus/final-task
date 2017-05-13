import React, {Component} from 'react'
import OfferDescription from './description'
import OfferDetailInfo from './info'

class OfferDetailsPane extends Component {
  render() {
    return (
      <div className="offer-details-pane">
        <OfferDescription description={this.props.data.description}/>
        <OfferDetailInfo params={this.props.params}/>
      </div>
    )
  }
}

export default OfferDetailsPane
