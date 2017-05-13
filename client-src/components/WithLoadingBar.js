import React from 'react'
import spinner from './spinner2.gif'

export default function WithLoadingBar(Component) {
  return function ComponentWithLoadingBar({ isLoading, ...props }) {
    if(isLoading) return <span className="loading-spinner"><img className="spinner" src={spinner}/></span>
    return <Component {...props} />
  }
}
