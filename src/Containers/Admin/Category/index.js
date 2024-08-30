/* eslint-disable react/no-unknown-property */
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'

import { Button } from '../../../components'
import CreateCategory from '../../../components/Category/CreateCategory'
import api from '../../../services/api'
import { Img } from '../Orders/styles'
import { Container, Edit } from './styles'

export default function Category() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    async function NewProducts() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    NewProducts()
  }, [])

  return (
    <Container>
      <div style={{ width: '10rem' }}>
        <Button type="submit" onClick={() => setVisible(true)}>
          Nova Categoria
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Nome da categoria
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Imagem</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map(category => (
              <TableRow
                key={category.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell>
                  <Img src={category.url} alt="product image" />
                </TableCell>
                <TableCell>
                  <Edit>
                    <HiOutlinePencilAlt
                      onClick={() => {
                        setVisible(true)
                        setSelectedCategory(category)
                      }}
                    />
                  </Edit>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CreateCategory
        visible={visible}
        setVisible={setVisible}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Container>
    /*   <Container>
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

        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Container> */
  )
}
