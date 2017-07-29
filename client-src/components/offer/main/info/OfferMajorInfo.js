import React from 'react'
import propTypes from 'prop-types'

export default function OfferMajorInfo({ data, info }) {
  return (
    <section id="major-info">
      <h1>{data.name}</h1>
      <div className="info-table">
        {info.map(e =>
            (<div className="info-row" key={e.id}>
              <div className="info-cell info-key">{e.name}</div>
              <div className="info-cell info-value">{e.value}</div>
            </div>))}
      </div>
    </section>
  )
}

OfferMajorInfo.propTypes = {
  data: propTypes.objectOf(propTypes.any).isRequired,
  info: propTypes.arrayOf(propTypes.object).isRequired,
}
