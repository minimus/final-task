import React, { Component } from 'react'
import propTypes from 'prop-types'
import CaptionItem from './CaptionItem'

class Caption extends Component {
  render() {
    return (
      <div className="comparison-caption">
        <div className="comparison-caption-cell" />
        {this.props.data.map(e => <CaptionItem item={e} key={e.id} />)}
      </div>
    )
  }
}

Caption.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Caption
