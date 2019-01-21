import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Button, Body, Heading } from '../styles/components'

const Home = () => (
  <div>
    <Section>
      <Heading>Scavanger Hunt</Heading>
      <Body align='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Body>
      <Button as={Link} to='/game'>Let's go</Button>
    </Section>
    <Section>
      Section 2
    </Section>
  </div>
)

export default Home
