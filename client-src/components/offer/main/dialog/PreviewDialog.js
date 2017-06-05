import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import DialogCaption from './DialogCaption'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import PreviewPane from './PreviewPane'

class PreviewDialog extends PureComponent {
  render() {
    const dialogStyle = { display: (this.props.show) ? 'block' : 'none' }
    return (
      <div id="preview-dialog" style={dialogStyle}>
        <DialogCaption onClose={this.props.onClose} />
        <div id="dialog-inline">
          <PrevButton onClick={this.props.onNavClick} />
          <PreviewPane
            pictures={this.props.pictures}
            selected={this.props.selected}
            onClick={this.props.onClick}
          />
          <NextButton onClick={this.props.onNavClick} />
        </div>
      </div>
    )
  }
}

PreviewDialog.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selected: propTypes.string.isRequired,
  show: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  onNavClick: propTypes.func.isRequired,
}

export default PreviewDialog
