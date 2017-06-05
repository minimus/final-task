import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class TechInfoItem extends PureComponent {
  render() {
    const garbage = (typeof text === 'string') ? !!this.props.text.match(/\d{4}-\d{2}-\d{2}[tT]\d{2}:\d{2}:\d{2}.\d{3}[zZ]/) : false

    if (!this.props.found) {
      return (
        <div className="tech-info-item tech-info-cell info-not-found">
          <i className="material-icons md-18">close</i>
        </div>
      )
    }
    if (garbage) {
      return (
        <div
          className="tech-info-item tech-info-cell info-undefined"
          title="Что-то есть, но что, непонятно..."
        >
          <i className="material-icons md-18">mood_bad</i>
        </div>
      )
    }
    return (
      <div className="tech-info-item tech-info-cell">
        {this.props.text}
      </div>
    )
  }
}

TechInfoItem.propTypes = {
  text: propTypes.string.isRequired,
  found: propTypes.bool.isRequired,
}

export default TechInfoItem
