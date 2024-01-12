/* eslint-disable react/no-unknown-property */
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FiUpload } from 'react-icons/fi'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Button } from '../../../components'
import api from '../../../services/api'
import {
  Container,
  ContainerInput,
  ErrorMessage,
  Input,
  Label,
  LabelUpload
} from './styles'
import { useNavigate } from 'react-router-dom'

export default function NewProduct() {
  const [category, setCategory] = useState([])
  const [filename, setFilename] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function NewProducts() {
      const { data } = await api.get('categories')
      setCategory(data)
    }

    NewProducts()
  }, [])

  const schema = yup.object().shape({
    name: yup.string().required('O nome é um campo obrigatório'),
    price: yup.string().required('O preço é um campo obrigatório'),
    category: yup.object().required('Escolha uma categoria'),
    file: yup
      .mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
      })
      // .test('fileSize', 'Carregue arquivos de até 2mb', value => {
      //   return value[0]?.size <= 200000
      // })
      .test(
        'type',
        'Carregue apenas arquivos JPG, JPEG ou PNG',
        value =>
          value[0]?.type === 'image/jpeg' ||
          value[0]?.type === 'image/jpg' ||
          value[0]?.type === 'image/png'
      )
      .required()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const productData = new FormData()

    productData.append('name', data.name)
    productData.append('price', data.price)
    productData.append('category_id', data.category.id)
    productData.append('file', data.file[0])

    await toast.promise(api.post('products', productData), {
      pending: 'Criando novo produto...',
      success: 'Produto criado com sucesso',
      error: 'Erro ao criar novo produto'
    })

    navigate('/lista-produtos')
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <ContainerInput>
          <Label>Nome</Label>
          <Input {...register('name')} placeholder="Nome do produto" />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </ContainerInput>

        <ContainerInput>
          <Label>Preço</Label>
          <Input {...register('price')} placeholder="Preço do produto" />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </ContainerInput>

        <ContainerInput>
          <LabelUpload>
            {filename || (
              <>
                <FiUpload />
                Upload de imagens
              </>
            )}

            <input
              {...register('file')}
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              onChange={e => setFilename(e.target.files[0]?.name)}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </ContainerInput>

        <ContainerInput>
          <Controller
            control={control}
            name="category"
            render={({ field }) => {
              return (
                <ReactSelect
                  {...register('category')}
                  options={category}
                  getOptionLabel={category => category.name}
                  getOptionValue={category => category.id}
                  {...field}
                />
              )
            }}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </ContainerInput>

        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Container>
  )
}
