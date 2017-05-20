import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import './searchbar.css'

class SearchBarElements extends Component {
  render() {
    const linkTo = (this.props.phrase) ? `/search/${encodeURIComponent(this.props.phrase)}/1` : '#'
    return (
      <div className="search-bar">
        <input type="text" onKeyUp={this.props.onKeyUp} />
        <NavLink
          to={linkTo}
          className="search-button"
          data-phrase={this.props.phrase}
          onClick={this.props.onClick}
        >
          <i className="material-icons md-24">search</i>
        </NavLink>
      </div>
    )
  }
}

SearchBarElements.propTypes = {
  phrase: propTypes.string.isRequired,
  onKeyUp: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
}

export default SearchBarElements
