import React, { Fragment, useState } from 'react'

function ModuleSearch({ options, onSearch, isVisible = false }) {
  const [text, setText] = useState('')
  if (!isVisible) {
    return <Fragment />
  }
  const reset = () => {
    setText('')
    onSearch('')
  }
  const search = () => {
    onSearch(text)
  }
  const onChange = (e) => {
    const val = e.target.value
    setText(val)
  }

  return (
    <div className='level py-3 px-1 m-0 table-header'>
      <div className='level-left' />
      <div className='level-right'>
        <div className='field has-addons'>
          <div className='control'>
            <button className='button is-ghost' type='button' onClick={reset}>
              <span className='icon'>
                <i className='far fa-times-circle' />
              </span>
            </button>
          </div>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='Busqueda'
              value={text}
              onChange={onChange}
            />
          </div>
          <div className='control'>
            <button className='button' type='button' onClick={search}>
              <span className='icon'>
                <i className='fas fa-search' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleSearch
