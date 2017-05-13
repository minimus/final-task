import React, {Component} from 'react'
import SearchElements, {SearchElementsWithLoadingBar} from './SearchElements'
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

export default Search
