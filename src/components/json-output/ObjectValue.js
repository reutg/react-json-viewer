import React, { Component, Fragment } from 'react'

import './JsonOutput.css'

class ObjectValue extends Component {
  renderValue(value) {
    let formattedValue = <span className='null'>(null)</span>

    if (typeof value === 'string') {
      formattedValue = <span className='text'>"{value}"</span>
    } else if (typeof value === 'number') {
      formattedValue = <span className='number'>{value}</span>
    }

    return formattedValue
  }

  render() {
    const { value } = this.props

    return <Fragment>{this.renderValue(value)}</Fragment>
  }
}

export default ObjectValue
