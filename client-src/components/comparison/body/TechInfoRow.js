import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import TechInfoCaption from './TechInfoCaption'
import TechInfoItem from './TechInfoItem'

class TechInfoRow extends PureComponent {
  render() {
    return (
      <div className="tech-info-row">
        <TechInfoCaption text={this.props.caption} />
        {this.props.items.map(e => <TechInfoItem text={e.text} found={e.found} key={e.id} />)}
      </div>
    )
  }
}

TechInfoRow.propTypes = {
  caption: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
}

export default TechInfoRow
