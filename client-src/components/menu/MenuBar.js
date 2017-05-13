import React, {Component} from 'react'
import MenuBackPanel from './MenuBackPanel'
import MenuItem from './MenuItem'

export default function MenuBar({main, onClick, shown, curMenu, prevMenu}) {

  const parentId = main.id;
  let shownClass = '';
  if (shown || prevMenu !== -1) {
    if (curMenu === parentId) shownClass = 'shown';
    else if (prevMenu === parentId) shownClass = 'hided';
  }
  return (
    <ul className={shownClass} id={parentId}>
      <MenuBackPanel main={main} onClick={onClick}/>
      {main.children.map(val =>
        <MenuItem key={val.id} item={val} onClick={onClick}/>
      )}
    </ul>
  )
}

//export default MenuBar
