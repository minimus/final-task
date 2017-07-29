import React, { Component } from 'react'
import propTypes from 'prop-types'
import { SearchElementsWithLoadingBar } from './SearchElements'
import './search.css'

class Search extends Component {
  isLoading = () => (!this.props.data)

  render() {
    return (
      <SearchElementsWithLoadingBar
        isLoading={this.isLoading()}
        {...this.props}
      />
    )
  }
}

Search.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Search
