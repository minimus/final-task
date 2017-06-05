import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

class OfferBadge extends PureComponent {
  delivery = () => {
    if (this.props.data.delivery) {
      return (
        <div id="delivery" className="offer-badge-info">
          <span className="yes"><i className="material-icons">done</i>Доставка</span>
          <span className="sub-info">
            {(this.props.data.delivery && this.props.data.sales_notes) ? this.props.data.sales_notes : ''}
          </span>
        </div>
      )
    }
    return ''
  }

  pickup = () => {
    if (this.props.data.pickup) {
      return (
        <div id="pickup" className="offer-badge-info">
          <span className="yes"><i className="material-icons">done</i>Самовывоз</span>
        </div>
      )
    }
    return ''
  }

  render() {
    return (
      <div id="offer-badge-container">
        <div id="price">
          {this.props.data.price}
        </div>
        <div id="available" className="offer-badge-info">
          {(this.props.data.available) ?
            <span className="yes"><i className="material-icons">done</i>В наличии</span> :
            <span className="not"><i className="material-icons">close</i>Нет в наличии</span>}
        </div>
        {this.pickup()}
        {this.delivery()}
        <div id="link">
          <Link to={this.props.data.url}>Купить</Link>
        </div>
      </div>
    )
  }
}

OfferBadge.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
}

export default OfferBadge
