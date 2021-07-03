import React, { useState } from 'react'
import BackButton from '../BackButton'
import ModuleHeader from '../Pagination/ModuleHeader'
import ModuleSearch from '../Pagination/ModuleSearch'

function Card({
  children,
  className = 'is-full',
  title = '',
  onReturn = () => {},
  onReload = () => {},
  onSearch = () => {},
  onAdd = () => {},
  options = null
}) {
  const [searchVisible, setSearchVisible] = useState(false)
  let onSearchAction = null
  if (onSearch) {
    onSearchAction = () => {
      setSearchVisible(true)
    }
  }
  return (
    <div className='columns'>
      <div className={`column ${className}`}>
        <div className='card px-5'>
          <ModuleHeader
            title={title}
            onSearch={onSearchAction}
            onAdd={onAdd}
            onReload={onReload}
            options={options}
          />
          <ModuleSearch isVisible={searchVisible} onSearch={onSearch} />
          <div className='card-header px-0'>
            <div className='level card-header-title  px-0 py-0'>
              <div className='level-left'>
                <BackButton onReturn={onReturn} />
              </div>
              <div className='level-right'>{options}</div>
            </div>
          </div>
          <div className='card-content px-0'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
