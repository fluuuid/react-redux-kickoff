import React, { Component } from 'react'
import { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { Section } from '../styles/components'

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
    const { theme } = this.props
    return (
      <Section margin={theme.header.height}>
        this is the game page
        <canvas />
      </Section>
    )
  }
}

export default connect()(withTheme(Game))
