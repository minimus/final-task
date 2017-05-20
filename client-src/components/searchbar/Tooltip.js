import React from 'react'
import propTypes from 'prop-types'

export default function Tooltip({ shown, onClick }) {
  const txt1 = 'Для поиска товара введите полное название или часть названия искомого товара...'
  const txt2 = 'Для поиска фразы поместите её в кавычки. Например: '
  const txt21 = 'samsung "galaxy tab"'
  const txt3 = 'Для исключения слова из поиска поставьте перед ним знак "-". Например: '
  const txt31 = 'samsung galaxy -tab'
  if (!shown) return null
  return (
    <div className="search-tooltip">
      <div className="search-tooltip-arrow" />
      <div className="search-tooltip-body">
        <span>
          {txt1}<br />
          {txt2}<i>{txt21}</i>.<br />
          {txt3}<i>{txt31}</i>.
        </span>
        <button onClick={onClick}>
          <i className="material-icons md-18">close</i>
        </button>
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  shown: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}
