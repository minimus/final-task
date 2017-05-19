import React from 'react'
import propTypes from 'prop-types'
import spinner from './spinner2.gif'

export default function WithLoadingBar(Component) {
  return function ({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <span className="loading-spinner">
          <img className="spinner" src={spinner} alt="Loading..." />
        </span>
      )
    }

    return <Component {...props} />
  }
}

WithLoadingBar.propTypes = {
  isLoading: propTypes.bool.isRequired,
}
