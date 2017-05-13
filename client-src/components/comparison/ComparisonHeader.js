import React from 'react'

export default function ({names}) {
  return (
    <h1 className="comparison-header">
      {names.map(e => e.split(',')[0]).join(' * ')}
    </h1>
  )
}
