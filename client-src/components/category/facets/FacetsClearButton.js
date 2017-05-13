import React from 'react'

export default function ({onClear}) {
  return (
    <div className="facets-clear-button" onClick={onClear}>
      Очистить фильтры
    </div>
  )
}
