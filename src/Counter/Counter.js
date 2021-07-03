import React, { useEffect, useState } from 'react'

function Counter({ min = 0, max = 10000000, count = 0, onChange = () => {} }) {
  const [countHelper, setCount] = useState(min)

  useEffect(() => {
    if (countHelper && count !== countHelper) {
      setCount(count)
    }
  }, [count])

  const handleManualWrite = (event) => {
    let val = event.target.value
    const reg = /[0-9]?[0-9]?(\.[0-9][0-9]?)?/
    if (reg.test(val)) {
      val = parseFloat(val)
      if (val >= this.min && val < this.max) {
        onChange(val)

        setCount(val)
      }
    }
  }
  const handleLess = () => {
    const val = countHelper - 1
    if (val >= min) {
      onChange(val)

      setCount(val)
    } else {
      setCount(min)
    }
  }
  const handlePlus = () => {
    const val = countHelper + 1
    if (val <= max) {
      onChange(val)
      setCount(val)
    }
  }
  return (
    <>
      <div className='field has-addons has-addons-right'>
        <p className='control has-icons-left has-icons-right'>
          <input
            className='input counter-input'
            style={{ width: '150px' }}
            type='number'
            placeholder='numero'
            value={countHelper}
            onChange={handleManualWrite}
          />

          <span className='icon is-small is-left' onClick={handleLess}>
            <input
              type='button'
              value='-'
              className='counter-button button is-ghost'
            />
          </span>
          <span className='icon is-small is-right' onClick={handlePlus}>
            <input
              type='button'
              value='+'
              className='counter-button button is-ghost'
            />
          </span>
        </p>
      </div>
    </>
  )
}

export default Counter
