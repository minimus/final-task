import React from 'react'

export default function ({ shown, onClick }) {
  if (!shown) return null
  return (
    <div className="search-tooltip">
      <div className="search-tooltip-arrow" />
      <div className="search-tooltip-body">
        <span>
          Для поиска товара введите полное название или часть названия искомого товара...<br />
          Для поиска фразы поместите её в кавычки. Например: <i>samsung "galaxy tab"</i>.<br />
          Для исключения слова из поиска поставьте перед ним знак "-". Например: <i>samsung galaxy -tab</i>.
        </span>
        <span>
          <i className="material-icons md-18" onClick={onClick}>close</i>
        </span>
      </div>
    </div>
  )
}
