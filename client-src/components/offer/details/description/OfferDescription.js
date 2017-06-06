import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class OfferDescription extends PureComponent {
  render() {
    return (
      <section id="description">
        <h3>Описание</h3>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

OfferDescription.propTypes = {
  description: propTypes.string.isRequired,
}

export default OfferDescription
