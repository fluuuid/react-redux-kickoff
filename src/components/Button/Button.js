import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  border: 1px solid red;
  background: ${({ theme, type }) => type === 'secondary' ? 'blue' : 'white'};
  font-size: 1rem;
  transition: background 0.5s;
  cursor: pointer;

  &:hover {
    background: green;
  }
`

const Button = ({ type }) => (
  <Wrapper type={type}>
    <h1>dragado</h1>
  </Wrapper>
)

export default Button
