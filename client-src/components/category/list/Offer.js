import React from 'react'
import { NavLink } from 'react-router-dom'
import CompareButton from './compare'
import noImage from '../no_photo.png'

export default function Offer({item, selected, onSelect}) {
  let picture = (Array.isArray(item.picture)) ? item.picture[0] : item.picture, img

  return (
    <div key={item.id.toString()} className="offer-item">
      <div className="offer-image">
        <NavLink to={'/offer/' + item.id}>
          <img src={(picture) ? picture : noImage}/>
        </NavLink>
      </div>
      <h1 className="offer-name"><NavLink to={'/offer/' + item.id}>{item.name}</NavLink></h1>
      <CompareButton item={item.id} selected={selected} onClick={onSelect}/>
      <span className="price">{item.price}</span>
    </div>
  )
}
