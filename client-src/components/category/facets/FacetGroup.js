import React, {Component} from 'react'
import FacetItem from './FacetItem'
import FacetColorItem from './FacetColorItem'

class FacetGroup extends Component {
  render() {
    return (
      <div className="facet-group">
        <span className="facet-group-caption">
          {this.props.facet.facet}
        </span>
        <span className="facet-group-container">
          {this.props.facet.values.map((e, i) => {
            const selected = !!this.props.selectedFacets.find(el =>
              (el.field === this.props.facet.field && el.name === this.props.facet.facet && el.value === e))
            if (this.props.facet.view === 'color') {
              return (
                <FacetColorItem
                  id={`${this.props.facet.id}_${i}`}
                  name={this.props.facet.facet}
                  value={e}
                  field={this.props.facet.field}
                  selected={selected}
                  onChange={this.props.onChange}
                  key={i}
                />
              )
            }
            return (
              <FacetItem
                id={`${this.props.facet.id}_${i}`}
                name={this.props.facet.facet}
                value={e}
                field={this.props.facet.field}
                selected={selected}
                onChange={this.props.onChange}
                key={i}
              />)
          })}
          </span>
      </div>
    )
  }
}

export default FacetGroup
