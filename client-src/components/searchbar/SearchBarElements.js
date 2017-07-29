import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import './searchbar.css'

export default function SearchBarElements({ phrase, onKeyUp, onClick, onChange }) {
  const linkTo = (phrase) ? `/search/${encodeURIComponent(phrase)}/1` : '#'
  return (
    <div className="search-bar">
      <input
        type="text"
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={phrase}
      />
      <NavLink
        to={linkTo}
        className="search-button"
        data-phrase={phrase}
        onClick={onClick}
      >
        <i className="material-icons md-24">search</i>
      </NavLink>
    </div>
  )
}

SearchBarElements.propTypes = {
  phrase: propTypes.string.isRequired,
  onKeyUp: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
}
