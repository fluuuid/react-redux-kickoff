import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoSVG } from '../../assets/images/logo.svg'

const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
`

const Logo = styled.div``

const Header = () => (
  <Wrapper>
    <Logo as={Link} to='/'>
      <LogoSVG />
    </Logo>
  </Wrapper>
)

export default Header
