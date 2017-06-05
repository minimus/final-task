import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import WithLoadingBar from '../WithLoadingBar'
import SearchList from './list/SearchList'
import SearchFacets from './facets/SearchFacets'
import LoadingBar from '../LoadingBar'

class SearchElements extends PureComponent {
  render() {
    return (
      <section id="search-result" className="search-container">
        <SearchFacets {...this.props} />
        <SearchList {...this.props} />
        <LoadingBar loading={this.props.loading} />
      </section>
    )
  }
}

SearchElements.propTypes = {
  loading: propTypes.bool.isRequired,
}

export default SearchElements

export const SearchElementsWithLoadingBar = WithLoadingBar(SearchElements)
