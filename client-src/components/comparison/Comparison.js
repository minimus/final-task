import React, { Component } from 'react'
import propTypes from 'prop-types'
import { ComparisonElementsWithLoadingBar } from './ComparisonElements'
import './comparison.css'

class Comparison extends Component {
  render() {
    return (
      <ComparisonElementsWithLoadingBar
        isLoading={!this.props.data}
        {...this.props}
      />
    )
  }
}

Comparison.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Comparison
