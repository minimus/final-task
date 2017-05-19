/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import propTypes from 'prop-types'
import MenuBackPanel from './MenuBackPanel'

export default function MenuItems({ items, onClick }) {
  return items.map((item) => {
    const dataCat = (item.children.length) ? '#' : `/category/${item.id}/1`
    let shown = ''
    if (this.state.shown || this.state.prevMenu !== -1) {
      if (this.state.curMenu === item.id) shown = 'shown'
      else if (this.state.prevMenu === item.id) shown = 'hided'
    }

    if (item.children.length) {
      return (
        <li
          key={item.id}
          data-category={dataCat}
          data-id={item.id}
        >
          <span onClick={onClick}>
            {item.keyValue}
          </span>
          <span
            className="has-children"
            onClick={onClick}
          >{item.children.length} <i
            className="material-icons"
          >chevron_right</i></span>
          <ul id={item.id} className={shown}>
            <MenuBackPanel main={item} onClick={onClick} />
            {MenuItems({ items: item.children, onClick })}
          </ul>
        </li>
      )
    }
    return (
      <li
        key={item.id}
        data-category={dataCat}
        data-id={item.id}
      >
        <span onClick={onClick}>
          {item.keyValue}
        </span>
      </li>
    )
  })
}

MenuItems.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onClick: propTypes.func.isRequired,
}
