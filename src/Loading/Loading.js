import React from 'react'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.time = this.props.time ? this.props.time : 15000
    this.state = {
      isReload: false,
      loaded: this.props.loaded
    }
    this.loadError = this.loadError.bind(this)
    this.reload = this.reload.bind(this)
    this.className = this.props.className ? this.props.className : 'barloader'
    this.logo = this.props.logo ? this.props.logo : ''
  }

  interval = null

  componentDidMount() {
    this.interval = setInterval(this.loadError, this.time)
  }

  componentDidUpdate() {
    if (this.props.loaded !== this.state.loaded) {
      const callback = () => {
        if (this.props.loaded) {
          clearInterval(this.interval)
        }
      }
      this.setState(
        {
          loaded: this.props.loaded
        },
        callback
      )
    }
  }

  loadError() {
    if (!this.props.loaded) {
      this.setState({
        isReload: true
      })
    }
    clearInterval(this.interval)
  }

  reload() {
    if (this.props.reload) {
      this.props.reload()
    }
    this.interval = setInterval(this.loadError, this.time)
    this.setState({
      isReload: false
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    if (!this.state.loaded) {
      let isFull = true
      if (this.props.isSmall) {
        isFull = false
      }
      const content = this.state.isReload ? (
        <>
          <div className={`is-vcentered ${this.className}`}>
            <div className='container'>
              <div className='columns is-centered'>
                <div className='column is-centered box  px-6 is-full'>
                  <div className='form'>
                    <div className='field'>
                      <div className='columns is-justify-content-center'>
                        <div className='column is-3'>
                          <figure className='image '>
                            <img src={this.logo} alt='logo' />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className='field py-3' />
                    <div className='field is-grouped is-grouped-centered'>
                      <p className='control'>
                        <button
                          className='button'
                          type='button'
                          onClick={this.reload}
                        >
                          <span>
                            <i className='fas fa-sync' />
                          </span>
                          <span className='pl-3'>Reintentar</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={`${this.className}  is-vcentered`}>
          <div className='container'>
            <progress className='progress is-small is-link' max='100'>
              %
            </progress>
          </div>
        </div>
      )
      return (
        <div className={` ${isFull ? 'hero is-fullheight' : ''} `}>
          {content}
        </div>
      )
    } else {
      return <></>
    }
  }
}

export default Loading
