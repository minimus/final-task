import React, { Component } from 'react'
import propTypes from 'prop-types'
import SearchBarElements from './SearchBarElements'
import Tooltip from './Tooltip'
import './searchbar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <SearchBarElements {...this.props} />
        <Tooltip
          shown={this.props.tooltip}
          onClick={this.props.onTooltipClick}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  tooltip: propTypes.bool.isRequired,
  onTooltipClick: propTypes.func.isRequired,
}

export default SearchBar
