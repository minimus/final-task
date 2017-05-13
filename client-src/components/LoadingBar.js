import React from 'react'
import spinner from './spinner2.gif'
import './loading.css'

export default function LoadingBar({loading}) {
  const shown = (loading) ? 'shown' : 'hided'
  return (
    <div id="loading-bar" className={shown}>
      <img className="spinner" src={spinner}/>
    </div>
  )
}