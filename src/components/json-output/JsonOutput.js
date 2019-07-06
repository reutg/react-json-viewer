import React, { Component, Fragment } from 'react'

import ObjectWrapper from './ObjectWrapper'
import ObjectValue from './ObjectValue'

import './JsonOutput.css'

class JsonOutput extends Component {
  constructor() {
    super()

    this.state = {
      isOpened: true,
    }
  }

  renderChildren(value) {
    const data = []
    const properties = Object.keys(value)

    for (const property of properties) {
      if (this.state.isOpened) {
        data.push(
          <JsonOutput
            key={property}
            property={property}
            value={value[property]}
            isOpened={this.state.isOpened}
          />
        )
      }
    }

    return data
  }

  toggleChildren = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    const { value, property } = this.props
    const { isOpened } = this.state

    if (typeof value === 'undefined') {
      return <Fragment />
    }

    return (
      <ul>
        <li>
          <ObjectWrapper
            isOpened={isOpened}
            value={value}
            toggleChildren={this.toggleChildren}
          >
            {property ? `${property}: ` : ''}
            {value instanceof Array || value instanceof Object ? 
              this.renderChildren(value)
             : <ObjectValue value={value} />
            }
          </ObjectWrapper>
        </li>
      </ul>
    )
  }
}

export default JsonOutput
