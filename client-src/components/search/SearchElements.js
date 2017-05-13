import React, {Component} from 'react'
import WithLoadingBar from '../WithLoadingBar'
import SearchList from './list/SearchList'
import SearchFacets from './facets/SearchFacets'
import LoadingBar from '../LoadingBar'

class SearchElements extends Component {
  render() {
    return (
      <section id="search-result" className="search-container">
        <SearchFacets {...this.props}/>
        <SearchList {...this.props}/>
        <LoadingBar loading={this.props.loading}/>
      </section>
    )
  }
}

export default SearchElements

export const SearchElementsWithLoadingBar = WithLoadingBar(SearchElements)