import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import CompareButton from './compare/CompareButton'
import noImage from '../no_photo.png'

export default function Offer({ item, selected, onSelect }) {
  const picture = (Array.isArray(item.picture)) ? item.picture[0] : item.picture

  return (
    <section key={item.id.toString()} className="offer-item">
      <div className="offer-image">
        <NavLink to={`/offer/${item.id}`}>
          <img src={(picture) || noImage} alt={item.name} />
        </NavLink>
      </div>
      <h1 className="offer-name">
        <NavLink to={`/offer/${item.id}`}>{item.name}</NavLink>
      </h1>
      <CompareButton
        item={item.id}
        selected={selected}
        onClick={onSelect}
      />
      <span className="price">{item.price}</span>
    </section>
  )
}

Offer.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  selected: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
}
