import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = styled.main`
  position: relative;
`

export { default as Events } from './Events'
export { default as Leaderboard } from './Leaderboard'
export { default as Onboarding } from './Onboarding'
export { default as Home } from './Home'
export { default as Game } from './Game'

const Index = ({ children }) => (
  <Main>
    <Header />
    {children}
    <Footer />
  </Main>
)

export default withRouter(connect(() => ({}), {})(Index))
