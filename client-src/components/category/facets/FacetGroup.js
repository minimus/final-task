import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import FacetItem from './FacetItem'
import FacetColorItem from './FacetColorItem'

class FacetGroup extends PureComponent {
  render() {
    return (
      <div className="facet-group">
        <span className="facet-group-caption">
          {this.props.facet.facet}
        </span>
        <span className="facet-group-container">
          {this.props.facet.values.map((e, i) => {
            const selected = !!this.props.selectedFacets.find(el =>
            (el.field === this.props.facet.field &&
            el.name === this.props.facet.facet &&
            el.value === e))
            const idx = `${this.props.facet.id}_${i}`
            if (this.props.facet.view === 'color') {
              return (
                <FacetColorItem
                  id={idx}
                  name={this.props.facet.facet}
                  value={e}
                  field={this.props.facet.field}
                  selected={selected}
                  onChange={this.props.onChange}
                  key={idx}
                />
              )
            }
            return (
              <FacetItem
                id={idx}
                name={this.props.facet.facet}
                value={e}
                field={this.props.facet.field}
                selected={selected}
                onChange={this.props.onChange}
                key={idx}
              />)
          })}
        </span>
      </div>
    )
  }
}

FacetGroup.propTypes = {
  facet: propTypes.objectOf(propTypes.any).isRequired,
  selectedFacets: propTypes.arrayOf(propTypes.object).isRequired,
  onChange: propTypes.func.isRequired,
}

export default FacetGroup
