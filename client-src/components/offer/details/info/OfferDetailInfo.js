import React from 'react'
import propTypes from 'prop-types'

export default function OfferDetailInfo({ params }) {
  return (
    <section id="detail-info">
      <h1>Характеристики</h1>
      {params.map((e) => {
        if (typeof e.keyValue === 'string' && /\d{4}-\d{2}-\d{2}[tT]\d{2}:\d{2}:\d{2}.\d{3}[zZ]/.test(e.keyValue)) {
          return null
        }
        return (
          <div className="info-row" key={e.id}>
            <div className="info-cell info-key">{e.name}</div>
            <div className="info-cell info-value">{e.keyValue}</div>
          </div>
        )
      })}
    </section>
  )
}

OfferDetailInfo.propTypes = {
  params: propTypes.arrayOf(propTypes.object).isRequired,
}
