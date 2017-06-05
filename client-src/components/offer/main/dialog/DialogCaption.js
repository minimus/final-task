import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class DialogCaption extends PureComponent {
  render() {
    return (
      <div id="dialog-caption">
        <button className="close-button" onClick={this.props.onClose}>
          <i className="material-icons md-36">close</i>
        </button>
      </div>
    )
  }
}

DialogCaption.propTypes = {
  onClose: propTypes.func.isRequired,
}

export default DialogCaption
