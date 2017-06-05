import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Offer from './Offer'
import WithLoadingBar from '../../WithLoadingBar'

class OffersList extends PureComponent {
  render() {
    return (
      <div id="category-list">
        {this.props.items.map(item => (
          <Offer
            item={item}
            selected={this.props.selected}
            onSelect={this.props.onSelect}
            key={item.id}
          />
        ))}
      </div>
    )
  }
}

OffersList.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  selected: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
}

export default OffersList

export const OffersListWithLoadingBar = WithLoadingBar(OffersList)
