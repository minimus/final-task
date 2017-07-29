import React from 'react'
import propTypes from 'prop-types'
import SearchBarElements from './SearchBarElements'
import Tooltip from './Tooltip'
import './searchbar.css'

export default function SearchBar({ phrase, onKeyUp, onClick, onChange, tooltip, onTooltipClick }) {
  return (
    <div className="search-bar-container">
      <SearchBarElements
        phrase={phrase}
        onClick={onClick}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
      <Tooltip
        shown={tooltip}
        onClick={onTooltipClick}
      />
    </div>
  )
}

SearchBar.propTypes = {
  phrase: propTypes.string.isRequired,
  onKeyUp: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  tooltip: propTypes.bool.isRequired,
  onTooltipClick: propTypes.func.isRequired,
}
