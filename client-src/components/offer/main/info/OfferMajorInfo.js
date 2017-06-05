import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class OfferMajorInfo extends PureComponent {
  render() {
    return (
      <div id="major-info">
        <h1>{this.props.data.name}</h1>
        <div className="info-table">
          {this.props.info.map(e =>
            (<div className="info-row" key={e.id}>
              <div className="info-cell info-key">{e.name}</div>
              <div className="info-cell info-value">{e.value}</div>
            </div>))}
        </div>
      </div>
    )
  }
}

OfferMajorInfo.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  info: propTypes.arrayOf(propTypes.object).isRequired,
}

export default OfferMajorInfo
