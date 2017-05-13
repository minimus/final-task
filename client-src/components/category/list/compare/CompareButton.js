import React from 'react'
import classNames from 'classnames'

export default function ({item, selected, onClick}) {
  const classSelected = (selected.findIndex(e => e.id === item) >= 0) ? 'selected' : ''
  return (
    <span
      className={classNames(classSelected, "compare-button")}
      onClick={onClick}
      data-id={item}
    >
      <i className="material-icons md-24">compare</i>
      <span>Сравнить</span>
    </span>
  )
}
