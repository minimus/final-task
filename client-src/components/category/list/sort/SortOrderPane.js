import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import SortOrder from './SortOrder'
import './sort.css'

class SortOrderPane extends PureComponent {
  render() {
    return (
      <div id="sort-order-pane">
        <SortOrder sort={this.props.sort} onChange={this.props.onChange} />
      </div>
    )
  }
}

SortOrderPane.propTypes = {
  sort: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
}

export default SortOrderPane
