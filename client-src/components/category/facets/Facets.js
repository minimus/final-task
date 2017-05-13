import React, {Component} from 'react'
import FacetGroup from './FacetGroup'
import FacetsClearButton from './FacetsClearButton'

class FacetsSection extends Component {
  render() {
    return (
      <div id="facets" className="facets-container">
        <FacetsClearButton onClear={this.props.onClear}/>
        {this.props.facets.map((e, i) =>
          <FacetGroup
            facet={e}
            selectedFacets={this.props.selectedFacets}
            onChange={this.props.onFacetChange}
            key={i}
          />)}
        <FacetsClearButton onClear={this.props.onClear}/>
      </div>
    )
  }
}

export default FacetsSection