import React, {Fragment} from 'react'

function LoadingBar({ value = -1, style = {} }) {
  return (
    <Fragment>
      <progress
        className='progress is-link'
        max='100'
        style={style}
        value={value}
      />
    </Fragment>
  )
}

export default LoadingBar
