import React from 'react'
import propTypes from 'prop-types'

export default function Tooltip({ shown, onClick }) {
  const txt1 = 'Для поиска товара введите полное название или часть названия искомого товара...'
  const txt2 = 'Для поиска фразы поместите её в кавычки. Например: <i>samsung "galaxy tab"</i>.'
  const txt3 = 'Для исключения слова из поиска поставьте перед ним знак "-". ' +
    'Например: <i>samsung galaxy -tab</i>.'
  if (!shown) return null
  return (
    <div className="search-tooltip">
      <div className="search-tooltip-arrow" />
      <div className="search-tooltip-body">
        <span>
          {txt1}<br />
          {txt2}<br />
          {txt3}
        </span>
        <span>
          <i className="material-icons md-18" onClick={onClick}>close</i>
        </span>
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  shown: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}
