import React from 'react'
import t from 'typy'
import { arraysEqual } from 'utils'

class SelectLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      location: -1,
      value: '',
      selected: 0
    }
    this.handleSelectOption = this.handleSelectOption.bind(this)
    this.getSelection = this.getSelection.bind(this)
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  handleSelectedChange(data = this.state.data) {
    const size = data.length
    for (let i = 0; i < size; ++i) {
      const ele = data[i]
      if (ele.value === this.props.selected) {
        return i
      }
    }
  }

  wrapData() {
    const { options, value = 'value', label = 'label' } = this.props
    const itemOptions = []
    const mapper = (item) => {
      const valueItem = this.getItemData(item, value)
      const labelItem = this.getItemData(item, label)
      itemOptions.push({
        label: labelItem,
        value: valueItem
      })
    }
    options.map(mapper)
    return itemOptions
  }

  componentDidUpdate() {
    const newData = this.wrapData()
    if (!arraysEqual(newData, this.state.data)) {
      this.loadData(newData)
    }
  }

  loadData(itemOptions = this.wrapData()) {
    const { placeholder } = this.props
    if (this.props.onSearch) {
      this.setState({
        data: itemOptions,
        location: 0
      })
      return
    }
    if (this.props.selected) {
      const location = this.handleSelectedChange(itemOptions)
      if (location) {
        this.setState({
          data: itemOptions,
          value: itemOptions[location].label,
          location: location,
          selected: this.props.selected
        })
        return
      }
    }
    if (placeholder) {
      this.setState({
        data: itemOptions,
        value: placeholder
      })
    } else if (itemOptions.length > 0) {
      if (this.state.location >= 0) {
        this.setState({
          data: itemOptions,
          value: itemOptions[this.state.location].label
        })
      } else {
        this.setState({
          data: itemOptions,
          value: itemOptions[0].label,
          location: 0
        })
      }
    } else {
      this.setState({
        data: itemOptions,
        value: ''
      })
    }
  }

  getItemData(item, col) {
    const result = t(item, col).safeObject
    if (!result) {
      return col.default ? col.default : ''
    }
    return result
  }

  handleTextChange(e) {
    if (this.props.onSearch) {
      const value = e.target.value
      this.props.onSearch(value)
      this.setState({
        value: value
      })
    }
  }

  handleSelectOption(location) {
    const item = this.state.data[location]
    if (this.props.onSelect) {
      this.props.onSelect(item.value, location)
    }
    this.setState({
      selected: item.value,
      value: item.label,
      location: location
    })
  }

  getSelection() {
    return ''
  }

  render() {
    const { disabled } = this.props
    if (disabled) {
      return (
        <input
          className='input'
          type='text'
          value={this.state.value}
          disabled
          readOnly
        />
      )
    }
    return (
      <>
        <div className='select is-full'>
          <div className='dropdown is-hoverable'>
            <div className='dropdown-trigger'>
              <input
                className='input'
                type='text'
                value={this.state.value}
                onChange={this.handleTextChange}
              />
            </div>
            <div className='dropdown-menu' role='menu'>
              <div className='dropdown-content'>
                {this.state.data.map((item, i) => (
                  <a
                    className={`dropdown-item ${
                      `${i}` === `${this.state.location}` ? 'is-active' : ''
                    }`}
                    onClick={() => {
                      this.handleSelectOption(i)
                    }}
                    key={`item-label-${item.value}-${i}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SelectLayout
