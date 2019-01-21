import styled, { css } from 'styled-components'

const Field = css`
  outline: 0;
  border: 0;
  background-color: ${({ theme }) => theme.color.grey};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-radius: 20px;
  font-size: 1.25rem;
  padding: 1.05rem 2.25rem;
  min-width: 200px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
`

export const Button = styled.button`
  ${Field}
`

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - ${({ margin }) => margin || 0}px);
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || 'inherit'};
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
  text-transform: uppercase;
`

export const Input = styled.input`
  ${Field};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.black};
  text-align: left;
  width: 100%;
`

export const Select = styled.select`
  ${Field};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.black};
  text-align: left;
  width: 100%;
`

export const SubmitButton = styled(Input)`
  text-align: center;
  background-color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
`
