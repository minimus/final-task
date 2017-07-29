import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

export default function ComparePaneClearButton({ disabled, onClick }) {
  const buttonClass = (disabled) ? 'disabled' : ''
  return (
    <button className={classNames(buttonClass, 'compare-clear-button')} onClick={onClick}>
      <i className="material-icons md-48">delete_forever</i>
    </button>
  )
}

ComparePaneClearButton.propTypes = {
  disabled: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}
