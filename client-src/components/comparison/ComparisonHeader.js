import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class ComparisonHeader extends PureComponent {
  render() {
    return (
      <h1 className="comparison-header">
        {this.props.names.map(e => e.split(',')[0]).join(' * ')}
      </h1>
    )
  }
}

ComparisonHeader.propTypes = {
  names: propTypes.arrayOf(propTypes.string).isRequired,
}

export default ComparisonHeader
