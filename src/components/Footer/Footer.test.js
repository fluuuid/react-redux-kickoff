import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe('Footer', () => {
  it('renders Footer', () => {
    const component = shallow(<Footer />)

    expect(component).toMatchSnapshot()
  })
})
