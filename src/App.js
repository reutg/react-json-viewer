import React, { Component, Fragment } from 'react'

import Search from './components/Search'
import JsonOutput from './components/json-output/JsonOutput'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      url: '',
      json: undefined,
    }
  }

  getJsonUrl = async url => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      this.setState({ json })
    } catch (err) {
      console.log(err)
      alert("Couldn't fetch the JSON")
    }
  }

  render() {
    return (
      <Fragment>
        <Search getJsonUrl={this.getJsonUrl} />
        <JsonOutput value={this.state.json} />
      </Fragment>
    )
  }
}

export default App
