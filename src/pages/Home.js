import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { rrandom } from '@fluuuid/math-utils'
import { Section, Button, Body, Heading } from '../styles/components'
import { Routes } from '../routes'

const colors = [
  'rgba(36, 123, 160, 1)',
  'rgba(112, 193, 179, 1)',
  'rgba(178, 219, 191, 1)',
  'rgba(243, 255, 189, 1)',
  'rgba(255, 22, 84, 1)'
]

const Home = ({ theme }) => (
  <Fragment>
    <Section margin={theme.header.height} bgColor={colors[rrandom(colors.length)]}>
      <Heading>Scavanger Hunt</Heading>
      <Body align='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Body>
      <Button as={Link} to={Routes.onboarding}>Let's go</Button>
    </Section>
    <Section bgColor={colors[rrandom(colors.length)]}>
      <Heading>An AR Scavanger Hunt</Heading>
      <Body align='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Body>
    </Section>
  </Fragment>
)

export default connect()(withTheme(Home))
