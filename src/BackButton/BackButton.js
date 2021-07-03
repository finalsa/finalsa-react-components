import React from 'react'

export default function BackButton({ onReturn }) {
  return (
    <nav className='breadcrumb  ml-0 pl-0 mb-0 pb-0' aria-label='breadcrumbs'>
      <li className='tree-li  ml-0 pl-0 mb-0 pb-0'>
        <button
          className='button  ml-0 pl-0 mb-0 pb-0 is-ghost is-size-6'
          onClick={onReturn}
        >
          <span className='mr-1'>
            <i className='fas fa-chevron-left' />
          </span>
          <span>Atras</span>
        </button>
      </li>
    </nav>
  )
}
