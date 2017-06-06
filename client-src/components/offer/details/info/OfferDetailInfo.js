import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class OfferDetailInfo extends PureComponent {
  render() {
    return (
      <section id="detail-info">
        <h3>Характеристики</h3>
        {this.props.params.map((e) => {
          if (typeof e.keyValue === 'string' && !!e.keyValue.match(/\d{4}-\d{2}-\d{2}[tT]\d{2}:\d{2}:\d{2}.\d{3}[zZ]/)) {
            return null
          }
          return (
            <div className="info-row" key={e.id}>
              <div className="info-cell info-key">{e.name}</div>
              <div className="info-cell info-value">{e.keyValue}</div>
            </div>
          )
        },
        )}
      </section>
    )
  }
}

OfferDetailInfo.propTypes = {
  params: propTypes.arrayOf(propTypes.object).isRequired,
}

export default OfferDetailInfo
