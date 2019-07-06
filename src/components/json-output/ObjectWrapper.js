import React, { Component, Fragment } from 'react'

import ToggleButton from './ToggleButton'

class ObjectWrapper extends Component {
  showType(value) {
    if (value instanceof Array) {
      return `Array(${value.length})`
    } else if (value instanceof Object) {
      return `Object(${Object.keys(value).length})`
    }
  }
  
  wrapElementTree(){
    const { value } = this.props
    const tree = [...this.props.children]
    
    if (!this.props.isOpened) {
      tree.splice(1, 0, this.showType(value))
      return tree
    }

    if (value instanceof Array) {
      tree.splice(1, 0, '[')
      tree.push(']')
    } else if (value instanceof Object) {
      tree.splice(1, 0, '{')
      tree.push('}')
    }

    return tree
  }

  render() {
    const { value, isOpened } = this.props
    const wrappedElementTree = this.wrapElementTree()

    return (
      <Fragment>
        <ToggleButton
          isOpened={isOpened}
          value={value}
          toggleChildren={this.props.toggleChildren}
        />
        {wrappedElementTree}
      </Fragment>
    )
  }
}

export default ObjectWrapper
