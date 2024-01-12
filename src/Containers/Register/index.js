import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Burger from '../../assets/burger-register.jpg'
import { Button } from '../../components'
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

export function Register() {
  const schema = Yup.object({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é um campo obrigatório'),
    password: Yup.string()
      .required('A senha é um campo obrigatório')
      .min(6, 'Mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .required('A senha é um campo obrigatório')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Tente novamente!')
    }
  }

  return (
    <Container>
      <Background>
        <img src={Burger} alt="Burger"></img>
      </Background>
      <ContainerItens>
        <H1>Create account</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <P>Name</P>
          <Input
            type="text"
            {...register('name')}
            placeholder="Enter your name"
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

          <P>Confirm the Password</P>
          <Input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm your password"
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button style={{ marginTop: '30px' }} type="submit">
            Sign Up
          </Button>
        </form>
        <SignIn>
          You have a account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login account
          </Link>
        </SignIn>
      </ContainerItens>
    </Container>
  )
}
