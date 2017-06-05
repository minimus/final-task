import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class FacetsClearButton extends PureComponent {
  render() {
    return (
      <button className="facets-clear-button" onClick={this.props.onClear}>
        Очистить фильтры
      </button>
    )
  }
}

FacetsClearButton.propTypes = {
  onClear: propTypes.func.isRequired,
}

export default FacetsClearButton
