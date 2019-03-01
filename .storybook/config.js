import React from 'react'
import { configure, addDecorator } from '@storybook/react';
// import { configureViewport } from '@storybook/addon-viewport';

import { ThemeProvider } from 'styled-components'
import {theme} from '../src/styles'
// import { Background } from '../src/styles/components'
// import '../src/index.css'

const req = require.context('../src', true, /story.js$/);

// configureViewport({
//   defaultViewport: 'iphone6'
// });

const Decorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    {/* <Background> */}
      {storyFn()}
    {/* </Background> */}
  </ThemeProvider>
)

addDecorator(Decorator)


configure(() => req.keys().forEach(req), module);