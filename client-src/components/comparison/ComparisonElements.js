import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import WithLoadingBar from '../WithLoadingBar'
import ComparisonTable from './ComparisonTable'
import ComparisonHeader from './ComparisonHeader'
import LoadingBar from '../LoadingBar'

class ComparisonElements extends PureComponent {
  constructor(props) {
    super(props)
    this.names = this.props.data.map(e => e.name)
  }

  render() {
    return (
      <section className="comparison-container">
        <div className="comparison-body">
          <ComparisonHeader names={this.names} />
          <ComparisonTable data={this.props.data} params={this.props.params} />
        </div>
        <LoadingBar loading={this.props.loading} />
      </section>
    )
  }
}

ComparisonElements.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  params: propTypes.arrayOf(propTypes.object).isRequired,
  loading: propTypes.bool.isRequired,
}

export default ComparisonElements

export const ComparisonElementsWithLoadingBar = WithLoadingBar(ComparisonElements)

