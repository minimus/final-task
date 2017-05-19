import React from 'react'
import propTypes from 'prop-types'
import { MenuWithLoadingBar } from './Menu'

export default function NavMenu({ item,
                                  onClick,
                                  shown,
                                  curMenu,
                                  prevMenu,
                                  tooltip,
                                  onTooltipClick }) {
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

NavMenu.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  curMenu: propTypes.number.isRequired,
  prevMenu: propTypes.number.isRequired,
  shown: propTypes.bool.isRequired,
  tooltip: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  onTooltipClick: propTypes.func.isRequired,
}
