import React from 'react'
import Dialogcaption from './DialogCaption'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import PreviewPane from './PreviewPane'

export default function PreviewDialog({pictures, selectedPicture, show, onClick, onClose, onNavClick}) {
  const dialogStyle = {display: (show) ? 'block' : 'none'}
  return (
    <div id="preview-dialog" style={dialogStyle}>
      <Dialogcaption onClose={onClose}/>
      <div id="dialog-inline">
        <PrevButton onClick={onNavClick}/>
        <PreviewPane pictures={pictures} selected={selectedPicture} onClick={onClick}/>
        <NextButton onClick={onNavClick}/>
      </div>
    </div>
  )
}
