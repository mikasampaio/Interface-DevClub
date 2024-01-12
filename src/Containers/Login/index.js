import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Burger from '../../assets/burger-black.jpg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  Background,
  ContainerItens,
  H1,
  P,
  Input,
  SignIn,
  ErrorMessage
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é um campo obrigatório'),
      password: yup
        .string()
        .required('A senha é um campo obrigatório')
        .min(6, 'Mínimo 6 caracteres')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async CustomerData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: CustomerData.email,
        password: CustomerData.password
      }),
      {
        success: 'Seja bem-vindo(a)',
        pending: 'Verificando os dados',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos')
      } else {
        navigate('/')
      }
    }, 1000)
  }

  return (
    <Container>
      <Background>
        <img src={Burger} alt="Burger"></img>
      </Background>
      <ContainerItens>
        <H1>Login account</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <P>Email</P>
          <Input
            type="email"
            {...register('email')}
            placeholder="Enter your email"
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <P>Password</P>
          <Input
            type="password"
            {...register('password')}
            placeholder="Enter your password"
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button style={{ marginTop: '50px' }} type="submit">
            Sign In
          </Button>
        </form>
        <SignIn>
          You don´t have a account?{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Create account
          </Link>
        </SignIn>
      </ContainerItens>
    </Container>
  )
}
