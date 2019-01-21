import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Section,
  Heading,
  SubmitButton,
  Input,
  Select
} from '../styles/components'
import { Routes } from '../routes'

const Form = styled.form`
  margin: 2rem auto;
  & > input, & > select {
    margin-bottom: 1rem;
  }
`
class Onboarding extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    const { history } = this.props
    history.push(Routes.game)
  }

  render () {
    const { theme, strings, campus } = this.props
    return (
      <Section margin={theme.header.height}>
        <Heading>{strings.getReady}</Heading>
        <Form onSubmit={this.onSubmit}>
          <Input placeholder={strings.signUpPlaceholderName} />
          <Select>
            <option value=''>{strings.signUpPlaceholderCampus}</option>
            {Object.keys(campus).map(c => (
              <option key={c} value={c}>{campus[c]}</option>
            ))}
          </Select>
          <SubmitButton type='submit' value='Submit' />
        </Form>
      </Section>
    )
  }
}

export default connect(({ contentful: { campus }, ui: { strings } }) => ({
  strings,
  campus
}))(withRouter(withTheme(Onboarding)))
