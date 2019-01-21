import React from 'react'
import styled, { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Section, Heading, Button, Input, Select } from '../styles/components'
import { Routes } from '../routes'

const Form = styled.form`
  margin: 2rem auto;
`

const Onboarding = ({ theme }) => (
  <Section margin={theme.header.height}>
    <Heading>Get Ready</Heading>
    <Form>
      <Input placeholder='Your Name' />
      <Select>
        <option>Campus 1</option>
        <option>Campus 2</option>
        <option>Campus 3</option>
        <option>Campus 4</option>
      </Select>
    </Form>
    <Button as={Link} to={Routes.game}>Submit</Button>
  </Section>
)

export default connect()(withTheme(Onboarding))
