import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import SearchBarElements from './SearchBarElements'
import Tooltip from './Tooltip'
import './searchbar.css'

class SearchBar extends PureComponent {
  render() {
    return (
      <div className="search-bar-container">
        <SearchBarElements
          phrase={this.props.phrase}
          onClick={this.props.onClick}
          onKeyUp={this.props.onKeyUp}
        />
        <Tooltip
          shown={this.props.tooltip}
          onClick={this.props.onTooltipClick}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  phrase: propTypes.string.isRequired,
  onKeyUp: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  tooltip: propTypes.bool.isRequired,
  onTooltipClick: propTypes.func.isRequired,
}

export default SearchBar
