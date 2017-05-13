import React, {Component} from 'react'
import CaptionItem from './CaptionItem'

class Caption extends Component {
  render() {
    return (
      <div className="comparison-caption">
        <div className="comparison-caption-cell"/>
        {this.props.data.map((e, i) => <CaptionItem item={e} key={i}/>)}
      </div>
    )
  }
}

export default Caption
