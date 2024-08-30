/* eslint-disable react/prop-types */
import { yupResolver } from '@hookform/resolvers/yup'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiUpload } from 'react-icons/fi'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Button } from '../..'
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

export default function CreateCategory({
  visible,
  setVisible,
  selectedCategory,
  setSelectedCategory
}) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [filename, setFilename] = useState(null)

  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
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
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (!selectedCategory) return

    reset({
      name: selectedCategory?.name,
      file: selectedCategory?.file?.path
    })
  }, [reset, selectedCategory])

  const onSubmit = async data => {
    const productData = new FormData()

    productData.append('name', data.name)
    productData.append('file', data.file[0])

    await toast.promise(api.post('categories', productData), {
      pending: 'Criando nova categoria...',
      success: 'Categoria criada com sucesso',
      error: 'Erro ao criar nova categoria'
    })

    setVisible(false)
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="responsive-dialog-title"
        style={{ padding: '15px' }}
      >
        <DialogTitle id="responsive-dialog-title">
          {selectedCategory ? 'Editar categoria' : 'Nova categoria'}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setVisible(false)}
          sx={theme => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500]
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <ContainerInput>
                <Label>Nome</Label>
                <Input {...register('name')} placeholder="Nome da categoria" />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
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

              <Button type="submit">
                {selectedCategory ? 'Editar Categoria' : 'Adicionar Categoria'}
              </Button>
            </form>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  )
}

CreateCategory.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func
}
