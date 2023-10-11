import React from 'react'

import Burger from '../../assets/Group 16.svg'
import {
  Container,
  Background,
  ContainerItens,
  H1,
  Form,
  P,
  Input,
  Button,
  SignIn
} from './styles'

function Login() {
  return (
    <Container>
      <Background>
        <img src={Burger} alt="Burger"></img>
      </Background>
      <ContainerItens>
        <H1>Login account</H1>

        <Form>
          <P>Email</P>
          <Input placeholder="Type your email"></Input>
        </Form>

        <Form>
          <P>Password</P>
          <Input placeholder="Type your password"></Input>
        </Form>
        <Button>Sign In</Button>

        <SignIn>
          You don´t have a account? <a>Create account</a>
        </SignIn>
      </ContainerItens>
    </Container>
  )
}

export default Login
