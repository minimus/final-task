import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class FacetItem extends PureComponent {
  render() {
    return (
      <span className="facet-item">
        <label htmlFor={this.props.id}>
          <input
            id={this.props.id}
            type="checkbox"
            className="facet-item"
            data-field={this.props.field}
            data-name={this.props.name}
            data-value={this.props.value}
            value={this.props.value}
            checked={this.props.selected}
            onChange={this.props.onChange}
          />
          {this.props.value}
        </label>
      </span>
    )
  }
}

FacetItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  field: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
}

export default FacetItem
