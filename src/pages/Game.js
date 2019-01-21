import React, { Fragment, Component } from 'react'
import { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { Section, Button, Body } from '../styles/components'
import { getCamera, getLocation } from '../reducers/capabilities'

class Game extends Component {
  shouldComponentUpdate (nextProps) {
    if (this.props.hasCamera && this.props.hasLocation) return false
    return true
  }

  componentDidMount () {
    // here you can start RAF
  }

  componentWillUnmount () {
    // kill RAF
  }

  render () {
    const { getCamera, getLocation, theme, strings, hasCamera, hasLocation } = this.props

    return (
      <Fragment>
        {!hasLocation && !hasCamera &&
          <Section margin={theme.header.height}>
            <Body align='center'>{strings.allowLocation}</Body>
            <Button onClick={getLocation}>{strings.allowLocationCTA}</Button>
          </Section>
        }
        {!hasCamera && hasLocation &&
          <Section margin={theme.header.height}>
            <Body align='center'>{strings.allowCamera}</Body>
            {<Button onClick={getCamera}>{strings.allowCameraCTA}</Button>}
          </Section>
        }
        {hasCamera && hasLocation &&
          <Section margin={theme.header.height}>
            <Body align='center'>This is the Game</Body>
          </Section>
        }
      </Fragment>
    )
  }
}

export default connect(({ contentful: { strings }, capabilities: { hasCamera, hasLocation } }) => ({
  hasCamera,
  strings,
  hasLocation
}), {
  getCamera,
  getLocation
})(withTheme(Game))
