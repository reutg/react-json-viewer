import React, { Component, Fragment } from 'react'

class ToggleButton extends Component {
  toggleChildren = () => {
    this.props.toggleChildren()
  }

  render() {
    const { value, isOpened } = this.props
    const { length } = Object.keys(value)

    if (!value || typeof value !== 'object') {
      return <Fragment />
    }


    return (
      <Fragment>
        {length ? <button onClick={this.toggleChildren}>{isOpened ? '-' : '+'}</button> : ''}
      </Fragment>
    )
  }
}

export default ToggleButton
