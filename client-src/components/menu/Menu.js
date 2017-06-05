import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import MenuButton from './MenuButton'
import MenuBar from './MenuBar'
import withLoadingBar from '../WithLoadingBar'
import MenuTooltip from './MenuTooltip'
import './menu.css'

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.bars = []
  }

  createBar = (item) => {
    this.bars.push(
      <MenuBar
        key={item.id}
        main={item}
        onClick={this.props.onClick}
        shown={this.props.shown}
        curMenu={this.props.curMenu}
        prevMenu={this.props.prevMenu}
      />,
    )

    if (item.children.length) {
      item.children.forEach(val => this.createBar(val))
    }
  }

  render() {
    this.bars = []
    this.createBar(this.props.item)
    return (
      <span className="left-menu-wrapper">
        <MenuButton id={(this.props.item) ? this.props.item.id : -1} onClick={this.props.onClick} />
        <div id="menu">
          {this.bars}
        </div>
        <MenuTooltip
          text="Для просмотра товаров по категориям используйте меню..."
          shown={this.props.tooltip}
          onClick={this.props.onTooltipClick}
        />
      </span>
    )
  }
}

Menu.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  curMenu: propTypes.number.isRequired,
  prevMenu: propTypes.number.isRequired,
  shown: propTypes.bool.isRequired,
  tooltip: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  onTooltipClick: propTypes.func.isRequired,
}

export default Menu

export const MenuWithLoadingBar = withLoadingBar(Menu)
