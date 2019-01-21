import React, { Component } from 'react'
import { connect } from 'react-redux'

class Game extends Component {
  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    // here you can start RAF
  }

  componentWillUnmount () {
    // kill RAF
  }

  render () {
    return (
      <div>
        this is the game page
        <canvas />
      </div>
    )
  }
}

export default connect()(Game)
