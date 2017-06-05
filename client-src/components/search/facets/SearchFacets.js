import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Facets from '../../category/facets/Facets'

class SearchFacets extends PureComponent {
  render() {
    return (
      <Facets
        facets={this.props.facets}
        selectedFacets={this.props.selectedFacets}
        onClear={this.props.onClear}
        onFacetChange={this.props.onFacetChange}
      />
    )
  }
}

SearchFacets.propTypes = {
  facets: propTypes.arrayOf(propTypes.object).isRequired,
  selectedFacets: propTypes.arrayOf(propTypes.object).isRequired,
  onClear: propTypes.func.isRequired,
  onFacetChange: propTypes.func.isRequired,
}

export default SearchFacets
