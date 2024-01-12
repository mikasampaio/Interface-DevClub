/* eslint-disable react/prop-types */
import { yupResolver } from '@hookform/resolvers/yup'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import PropTypes from 'prop-types'
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
  ContainerCheck,
  ContainerInput,
  ErrorMessage,
  Input,
  InputCheck,
  Label,
  LabelUpload
} from './styles'

export default function EditProductDialog({
  visible,
  setVisible,
  selectedProduct: product,
  setSelectedProduct,
  products
}) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [category, setCategory] = useState([])
  const [filename, setFilename] = useState(null)

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
    offer: yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    reset({
      name: product?.name,
      price: product?.price,
      category: product?.category,
      offer: product?.offer
    })
  }, [reset, product])

  const onSubmit = async data => {
    const productData = new FormData()

    productData.append('name', data.name)
    productData.append('price', data.price)
    productData.append('category_id', data.category.id)
    productData.append('file', data.file[0])
    productData.append('offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productData), {
      pending: 'Editando novo produto...',
      success: 'Produto editado com sucesso',
      error: 'Erro ao editar novo produto'
    })

    setSelectedProduct(...products)
    setVisible(false)
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Editar Produto</DialogTitle>
        <DialogContent>
          <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <ContainerInput>
                <Label>Nome</Label>
                <Input {...register('name')} placeholder="Nome do produto" />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </ContainerInput>

              <ContainerInput>
                <Label>Preço</Label>
                <Input
                  {...register('price')}
                  placeholder="Preço do produto"
                  prefix="R$"
                />
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
              <ContainerCheck>
                <input
                  {...register('offer')}
                  placeholder="Preço do produto"
                  type="checkbox"
                />
                <Label>Produto em oferta?</Label>
              </ContainerCheck>
            </form>
            <DialogActions style={{ padding: '10px 0 0' }}>
              <Button
                autoFocus
                onClick={() => {
                  setVisible(false)
                }}
              >
                Cancelar
              </Button>
              <Button onClick={handleSubmit(onSubmit)}>Editar Produto</Button>
            </DialogActions>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  )
}

EditProductDialog.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func
}
