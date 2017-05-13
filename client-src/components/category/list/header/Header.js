import React from 'react'

export default function Header({title, count}) {
  return (
    <h1>
      {title} <span className="count">({count})</span>
    </h1>
  )
}
