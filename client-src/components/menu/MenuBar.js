import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import MenuBackPanel from './MenuBackPanel'
import MenuItem from './MenuItem'

class MenuBar extends PureComponent {
  render() {
    const parentId = this.props.main.id
    let shownClass = ''
    if (this.props.shown || this.props.prevMenu !== -1) {
      if (this.props.curMenu === parentId) shownClass = 'shown'
      else if (this.props.prevMenu === parentId) shownClass = 'hided'
    }
    return (
      <ul className={shownClass} id={parentId}>
        <MenuBackPanel main={this.props.main} onClick={this.props.onClick} />
        {this.props.main.children.map(val =>
          <MenuItem key={val.id} item={val} onClick={this.props.onClick} />,
        )}
      </ul>
    )
  }
}

MenuBar.propTypes = {
  main: propTypes.objectOf(propTypes.any).isRequired,
  curMenu: propTypes.number.isRequired,
  prevMenu: propTypes.number.isRequired,
  shown: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}

export default MenuBar
