import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

export default function CompareButton({ item, selected, onClick }) {
  const classSelected = (selected.findIndex(e => e.id === item) >= 0) ? 'selected' : ''
  return (
    <button
      className={classNames(classSelected, 'compare-button')}
      onClick={onClick}
      data-id={item}
    >
      <i className="material-icons md-24">compare</i>
      <span>Сравнить</span>
    </button>
  )
}

CompareButton.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  selected: propTypes.arrayOf(propTypes.object).isRequired,
  onClick: propTypes.func.isRequired,
}
