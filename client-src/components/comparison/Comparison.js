import React, {Component} from 'react'
import ComparisonElements, {ComparisonElementsWithLoadingBar} from './ComparisonElements'
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

export default Comparison
