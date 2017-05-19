import React from 'react'

export default function ({ phrase, count }) {
  if (count === 0) {
    return (
      <div className="search-result-header">
        <h3>
          По запросу "{phrase}" ничего не найдено...
        </h3>
      </div>
    )
  }
  return (
    <div className="search-result-header">
      <h3>
        Показан результат поиска по запросу: "{phrase}" <span className="search-items-count">({count})</span>
      </h3>
    </div>
  )
}
