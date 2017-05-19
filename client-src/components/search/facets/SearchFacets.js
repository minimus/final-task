import React, { Component } from 'react'
import Facets from '../../category/facets/Facets'

class SearchFacets extends Component {
  render() {
    return (
      <Facets {...this.props} />
    )
  }
}

export default SearchFacets
