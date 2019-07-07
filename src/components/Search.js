import React, { Component } from 'react'

import './Search.css'

class Search extends Component {
  constructor() {
    super()

    this.state = {
      url: '',
    }
  }

  handleInput = event => {
    this.setState({ url: event.target.value })
  }

  getJsonUrl = () => {
    this.props.getJsonUrl(this.state.url)
  }

  render() {
    return (
      <div className='search-container'>
        <input
          type='text'
          placeholder='Enter url'
          value={this.state.url}
          onChange={this.handleInput}
        />

        <button className='show-button' onClick={this.getJsonUrl}>Show JSON</button>
      </div>
    )
  }
}

export default Search
