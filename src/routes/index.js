import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import Index, { Events, Home, Leaderboard, Onboarding, Game } from '../pages'
import { theme } from '../styles'

const history = createBrowserHistory()

const AppRouter = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Index>
        <Route path='/' exact component={Home} />
        <Route path='/events' component={Events} />
        <Route path='/game' component={Game} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/onboarding' component={Onboarding} />
      </Index>
    </Router>
  </ThemeProvider>
)

export default AppRouter
