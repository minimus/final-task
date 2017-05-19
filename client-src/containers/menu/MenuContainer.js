import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { fetchMenuData, menuClicked, closeTooltip } from '../../redux/modules/menu'
import NavMenu from '../../components/menu/NavMenu'

class MenuContainer extends Component {

  componentDidMount() {
    this.props.fetchMenuData()
  }

  render() {
    return (
      <NavMenu
        item={this.props.menu}
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

MenuContainer.propTypes = {
  fetchMenuData: propTypes.func.isRequired,
  menu: propTypes.objectOf(propTypes.object).isRequired,
  curMenu: propTypes.number.isRequired,
  prevMenu: propTypes.number.isRequired,
  shown: propTypes.bool.isRequired,
  tooltip: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  onTooltipClick: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
  menu: state.menu.menu,
  shown: state.menu.shown,
  curMenu: state.menu.curMenu,
  prevMenu: state.menu.prevMenu,
  tooltip: state.menu.tooltip,
})

const mapDispatchToProps = {
  onClick: menuClicked,
  onTooltipClick: closeTooltip,
  fetchMenuData,
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
