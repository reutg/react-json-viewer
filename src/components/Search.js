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

  render() {
    return (
      <div className='search-container'>
        <label>JSON URL</label>

        <input
          type='text'
          placeholder='Enter JSON URL'
          value={this.state.url}
          onChange={this.handleInput}
        />

        <button>Show JSON</button>
      </div>
    )
  }
}

export default Search
