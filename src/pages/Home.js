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

const Home = ({ theme, strings }) => (
  <Fragment>
    <Section margin={theme.header.height} bgColor={colors[rrandom(colors.length)]}>
      <Heading>{strings.homeSection1Heading}</Heading>
      <Body align='center'>{strings.homeSection1Body}</Body>
      <Button as={Link} to={Routes.onboarding}>{strings.homeSection1CTA}</Button>
    </Section>
    <Section bgColor={colors[rrandom(colors.length)]}>
      <Heading>{strings.homeSection2Heading}</Heading>
      <Body align='center'>{strings.homeSection2Body}</Body>
    </Section>
  </Fragment>
)

export default connect(({ ui: { strings } }) => ({
  strings
}))(withTheme(Home))
