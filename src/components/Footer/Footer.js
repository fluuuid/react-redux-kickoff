import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.red};
`

const Footer = () => (
  <Wrapper>
    Footer
  </Wrapper>
)

export default Footer
