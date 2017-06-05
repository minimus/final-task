import React, { PureComponent } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

class ComparePaneClearButton extends PureComponent {
  render() {
    const buttonClass = (this.props.disabled) ? 'disabled' : ''
    return (
      <button className={classNames(buttonClass, 'compare-clear-button')} onClick={this.props.onClick}>
        <i className="material-icons md-48">delete_forever</i>
      </button>
    )
  }
}

ComparePaneClearButton.propTypes = {
  disabled: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}

export default ComparePaneClearButton
