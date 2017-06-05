import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class PrevButton extends PureComponent {
  render() {
    return (
      <button id="show-left" onClick={this.props.onClick}>
        <i className="md-48 material-icons">chevron_left</i>
      </button>
    )
  }
}

PrevButton.propTypes = {
  onClick: propTypes.func.isRequired,
}

export default PrevButton
