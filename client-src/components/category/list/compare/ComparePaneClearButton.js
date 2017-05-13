import React from 'react'
import classNames from 'classnames'

export default function ({disabled, onClick}) {
  const buttonClass = (disabled) ? 'disabled' : ''
  return (
    <div className={classNames(buttonClass, 'compare-clear-button')} onClick={onClick}>
      <i className="material-icons md-48">delete_forever</i>
    </div>
  )
}
