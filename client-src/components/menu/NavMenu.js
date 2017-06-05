import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { MenuWithLoadingBar } from './Menu'

class NavMenu extends PureComponent {
  render() {
    return (
      <MenuWithLoadingBar
        isLoading={!this.props.item}
        item={this.props.item}
        onClick={this.props.onClick}
        shown={this.props.shown}
        curMenu={this.props.curMenu}
        prevMenu={this.props.prevMenu}
        tooltip={this.props.tooltip}
        onTooltipClick={this.props.onTooltipClick}
      />
    )
  }
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

export default NavMenu
