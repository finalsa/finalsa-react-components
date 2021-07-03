import TableData from './TableData'
import React from 'react'

function TableRow({
  className = '',
  isSelected = false,
  index = 0,
  data = {},
  cols = [],
  handleSelectedRow = () => {}
}) {
  const items = []
  const dataMapper = (col, i) => {
    items.push(
      <TableData
        key={`tb-row-${index}-col-${i} `}
        col={col}
        data={data}
        index={index}
      />
    )
  }
  cols.map(dataMapper)
  return (
    <>
      <tr
        key={`tb-row-${index}-${isSelected}`}
        className={`${className} ${isSelected ? 'is-selected' : ''}`}
        onClick={() => handleSelectedRow(data, index)}
      >
        {items}
      </tr>
    </>
  )
}
export default TableRow
