import React, {Component} from 'react'
import WithLoadingBar from '../WithLoadingBar'
import ComparisonTable from './ComparisonTable'
import ComparisonHeader from './ComparisonHeader'
import LoadingBar from '../LoadingBar'

class ComparisonElements extends Component {
  render() {
    return (
      <section className="comparison-container">
        <div className="comparison-body">
          <ComparisonHeader names={this.props.data.map(e => e.name)}/>
          <ComparisonTable data={this.props.data} params={this.props.params}/>
        </div>
        <LoadingBar loading={this.props.loading}/>
      </section>
    )
  }
}

export default ComparisonElements

export const ComparisonElementsWithLoadingBar = WithLoadingBar(ComparisonElements)


