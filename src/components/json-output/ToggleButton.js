import React, { Component, Fragment } from 'react'

class ToggleButton extends Component {
  toggleChildren = () => {
    this.props.toggleChildren()
  }

  render() {
    const { value, isOpened } = this.props
    
    if (!value || typeof value !== 'object') {
      return <Fragment />
    }
    
    const { length } = Object.keys(value)
    
    return (
      <Fragment>
        {length ? (
          <button className="toggle-button" onClick={this.toggleChildren}>
            {isOpened ? <Fragment>&#9662;</Fragment> : <Fragment>&#9656;</Fragment>}
          </button>
        ) : (
          ''
        )}
      </Fragment>
    )
  }
}

export default ToggleButton
