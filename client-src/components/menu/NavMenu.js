import React from 'react'
import {Menu, MenuWithLoadingBar} from './Menu'

export default function NavMenu({item, onClick, shown, curMenu, prevMenu, tooltip, onTooltipClick}) {
  return (
    <MenuWithLoadingBar
      isLoading={!item}
      item={item}
      onClick={onClick}
      shown={shown}
      curMenu={curMenu}
      prevMenu={prevMenu}
      tooltip={tooltip}
      onTooltipClick={onTooltipClick}
    />
  )
}
