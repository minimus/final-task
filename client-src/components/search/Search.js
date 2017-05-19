import React, { Component } from 'react'
import propTypes from 'prop-types'
import { SearchElementsWithLoadingBar } from './SearchElements'
import './search.css'

class Search extends Component {
  render() {
    return (
      <SearchElementsWithLoadingBar
        isLoading={!this.props.data}
        {...this.props}
      />
    )
  }
}

Search.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Search
