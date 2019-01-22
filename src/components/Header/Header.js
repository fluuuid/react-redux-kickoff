import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Routes } from '../../routes'

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
    <Logo as={Link} to={Routes.home}>
      Logo
    </Logo>
  </Wrapper>
)

export default Header
