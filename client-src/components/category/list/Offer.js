import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import CompareButton from './compare'
import noImage from '../no_photo.png'

class Offer extends PureComponent {
  render() {
    const picture = (Array.isArray(this.props.item.picture)) ?
      this.props.item.picture[0] : this.props.item.picture
    let img

    return (
      <section key={this.props.item.id.toString()} className="offer-item">
        <div className="offer-image">
          <NavLink to={`/offer/${this.props.item.id}`}>
            <img src={(picture) || noImage} alt={this.props.item.name} />
          </NavLink>
        </div>
        <h1 className="offer-name">
          <NavLink to={`/offer/${this.props.item.id}`}>{this.props.item.name}</NavLink>
        </h1>
        <CompareButton
          item={this.props.item.id}
          selected={this.props.selected}
          onClick={this.props.onSelect}
        />
        <span className="price">{this.props.item.price}</span>
      </section>
    )
  }
}

Offer.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  selected: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
}

export default Offer
