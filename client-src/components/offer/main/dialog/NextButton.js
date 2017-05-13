import React from 'react'

export default function ({onClick}) {
  return (
    <div id="show-right" onClick={onClick}>
      <i className="material-icons md-48">chevron_right</i>
    </div>
  )
}
