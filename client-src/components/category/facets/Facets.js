import React, { Component } from 'react'
import propTypes from 'prop-types'
import FacetGroup from './FacetGroup'
import FacetsClearButton from './FacetsClearButton'

class FacetsSection extends Component {
  render() {
    return (
      <div id="facets" className="facets-container">
        <FacetsClearButton onClear={this.props.onClear} />
        {this.props.facets.map((e, i) => {
          const idx = i + 1
          return (
            <FacetGroup
              facet={e}
              selectedFacets={this.props.selectedFacets}
              onChange={this.props.onFacetChange}
              key={idx}
            />
          )
        })}
        <FacetsClearButton onClear={this.props.onClear} />
      </div>
    )
  }
}

FacetsSection.propTypes = {
  facets: propTypes.arrayOf(propTypes.object).isRequired,
  selectedFacets: propTypes.arrayOf(propTypes.object).isRequired,
  onClear: propTypes.func.isRequired,
  onFacetChange: propTypes.func.isRequired,
}

export default FacetsSection
