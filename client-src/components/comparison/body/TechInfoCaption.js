import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class TechInfoCaption extends PureComponent {
  render() {
    return (
      <div className="tech-info-cell info-caption">
        {this.props.text}
      </div>
    )
  }
}

TechInfoCaption.propTypes = {
  text: propTypes.string.isRequired,
}

export default TechInfoCaption
