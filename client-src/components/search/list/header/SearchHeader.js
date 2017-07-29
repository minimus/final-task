import React from 'react'
import propTypes from 'prop-types'

export default function SearchHeader({ phrase, count }) {
  const text = (count === 0) ? `По запросу "${phrase}" ничего не найдено...` :
    `Показан результат поиска по запросу: "${phrase}" `
  if (count === 0) {
    return (
      <div className="search-result-header">
        <h3>
          {text}
        </h3>
      </div>
    )
  }
  return (
    <div className="search-result-header">
      <h3>
        {text}<span className="search-items-count">({count})</span>
      </h3>
    </div>
  )
}

SearchHeader.propTypes = {
  phrase: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
}
