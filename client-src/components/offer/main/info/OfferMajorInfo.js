import React, {Component} from 'react'

class OfferMajorInfo extends Component {
  render() {
    return (
      <div id="major-info">
        <h1>{this.props.data.name}</h1>
        <div className="info-table">
          {this.props.info.map((e, i) =>
            <div className="info-row" key={i}>
              <div className="info-cell info-key">{e.name}</div>
              <div className="info-cell info-value">{e.value}</div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default OfferMajorInfo
