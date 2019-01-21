import styled from 'styled-components'

export const Button = styled.button`
  outline: 0;
  background-color: ${({ theme }) => theme.color.grey};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-radius: 30px;
  font-size: 1.25rem;
  padding: 1.05rem 2.25rem;
  min-width: 150px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
`

export const Section = styled.section`
  margin: 0 auto;
  width: 90%;
  height: calc(100vh - 111px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Body = styled.p`
  text-align: ${({ align }) => align || 'left'};
  line-height: 1.5;
  margin: 3rem auto;
`

export const Heading = styled.h1`
  text-align: ${({ align }) => align || 'center'};
  font-size: 2.5rem;
  margin: 0;
`
