import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import ItemImage from './Image'
import ItemHeader from './Header'
import ItemPrice from './Price'
import PurchaseButton from './PurchaseButton'

class CaptionItem extends PureComponent {
  render() {
    const picture = (Array.isArray(this.props.item.picture)) ?
      this.props.item.picture[0] : this.props.item.picture
    const link = `/offer/${this.props.item.id}`
    return (
      <div className="comparison-caption-cell">
        <div className="caption-cell">
          <ItemImage image={picture} link={link} />
          <ItemHeader text={this.props.item.name} link={link} />
          <ItemPrice price={this.props.item.price} />
          <PurchaseButton link={this.props.item.url} />
        </div>
      </div>
    )
  }
}

CaptionItem.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
}

export default CaptionItem

