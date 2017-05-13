import React from 'react'

export default function ({onClick}) {
  return (
    <div id="show-left" onClick={onClick}>
      <i className="md-48 material-icons">chevron_left</i>
    </div>
  )
}
