import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  it('renders Button', () => {
    const component = shallow(<Button />)

    expect(component).toMatchSnapshot()
  })
})
