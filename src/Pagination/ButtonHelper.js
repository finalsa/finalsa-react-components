import React, { Fragment } from 'react'

function ButtonHelper({ onAdd, onSearch, onReload, options }) {
  const buttons = []
  let optionsHelper = null
  if (onSearch) {
    buttons.push(
      <button
        className='button is-ghost px-1 has-text-success'
        key='table-button-search-action'
        type='button'
        onClick={onSearch}
      >
        <i className='fas fa-search' />
      </button>
    )
  }

  if (options) {
    optionsHelper = []
    const mapper = (item, i) => {
      optionsHelper.push(
        <a
          type='button'
          href='#foo'
          onClick={item.action}
          key={`dropdown-button-${i}`}
          className='dropdown-item'
        >
          {item.name}
        </a>
      )
    }
    options.map(mapper)
  }

  if (onReload) {
    buttons.push(
      <button
        className='button is-ghost px-1 has-text-primary'
        key='table-button-sync-action'
        type='button'
        onClick={onReload}
      >
        <i className='fas fa-sync' />
      </button>
    )
  }

  if (onAdd) {
    buttons.push(
      <button
        className='button is-ghost px-1 has-text-info'
        key='table-button-add-action'
        type='button'
        onClick={onAdd}
      >
        <i className='fas fa-plus' />
      </button>
    )
  }

  return (
    <Fragment>
      {optionsHelper ? (
        <>
          <div className='dropdown is-hoverable is-right'>
            <div className='dropdown-trigger'>
              <button
                className='button is-ghost px-1 has-text-black'
                key='table-button-search-action'
                type='button'
                onClick={onSearch}
              >
                <i className='fas fa-ellipsis-h' />
              </button>
            </div>
            <div className='dropdown-menu' id='dropdown-menu' role='menu'>
              <div className='dropdown-content'>{optionsHelper}</div>
            </div>
          </div>
        </>
      ) : null}
      <div className='buttons'>{buttons}</div>
    </Fragment>
  )
}
export default ButtonHelper
