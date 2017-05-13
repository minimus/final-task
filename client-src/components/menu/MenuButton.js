import React from 'react'

export default function MenuButton({id, onClick}) {
  return (
    <i id="left-menu" data-id={id}
       className="material-icons md-48 a-left-icon menu-trigger"
       onClick={onClick}>menu</i>
  )
}
