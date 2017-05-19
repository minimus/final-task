import React from 'react'
import propTypes from 'prop-types'
import DialogCaption from './DialogCaption'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import PreviewPane from './PreviewPane'

export default function PreviewDialog({ pictures, selected, show, onClick, onClose, onNavClick }) {
  console.log(selected)
  const dialogStyle = { display: (show) ? 'block' : 'none' }
  return (
    <div id="preview-dialog" style={dialogStyle}>
      <DialogCaption onClose={onClose} />
      <div id="dialog-inline">
        <PrevButton onClick={onNavClick} />
        <PreviewPane pictures={pictures} selected={selected} onClick={onClick} />
        <NextButton onClick={onNavClick} />
      </div>
    </div>
  )
}

PreviewDialog.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selected: propTypes.string.isRequired,
  show: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  onNavClick: propTypes.func.isRequired,
}
