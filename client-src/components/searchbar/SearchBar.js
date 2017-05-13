import React, {Component} from 'react'
import SearchBarElements from './SearchBarElements'
import Tooltip from './Tooltip'
import './searchbar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <SearchBarElements {...this.props}/>
        <Tooltip
          shown={this.props.tooltip}
          onClick={this.props.onTooltipClick}
        />
      </div>
    )
  }
}

export default SearchBar
