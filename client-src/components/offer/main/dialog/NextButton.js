import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class NextButton extends PureComponent {
  render() {
    return (
      <button id="show-right" onClick={this.props.onClick}>
        <i className="material-icons md-48">chevron_right</i>
      </button>
    )
  }
}

NextButton.propTypes = {
  onClick: propTypes.func.isRequired,
}

export default NextButton
