import React from 'react'
import propTypes from 'prop-types'

export default function SearchHeader({ phrase, count }) {
  const text = `По запросу "${phrase}" ничего не найдено...`
  const txt = `Показан результат поиска по запросу: "${phrase}" `
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
        {txt}<span className="search-items-count">({count})</span>
      </h3>
    </div>
  )
}

SearchHeader.propTypes = {
  phrase: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
}
