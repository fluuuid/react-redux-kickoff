import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import Index, { Events, Home, Leaderboard, Onboarding, Game } from '../pages'
import { theme } from '../styles'

const history = createBrowserHistory()

export const Routes = {
  home: '/',
  events: '/events',
  game: '/game',
  leaderboard: '/leaderboard',
  onboarding: '/onboarding'
}

const routes = {
  [Routes.home]: Home,
  [Routes.events]: Events,
  [Routes.game]: Game,
  [Routes.leaderboard]: Leaderboard,
  [Routes.onboarding]: Onboarding
}

const AppRouter = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Index>
        {Object.keys(routes).map(r => (
          <Route key={r} path={r} exact={r === '/'} component={routes[r]} />
        ))}
      </Index>
    </Router>
  </ThemeProvider>
)

export default AppRouter
