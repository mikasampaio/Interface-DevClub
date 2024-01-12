import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'

import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import EditProductDialog from '../EditProduct'
import { Container, Edit, Offer } from './styles'

export default function Products() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadProducts()
  }, [])

  function isOffer(offer) {
    if (offer) {
      return <Offer isOffer>Em oferta</Offer>
    }
    return <Offer>Sem oferta</Offer>
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Nome do produto
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Preço</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>
                Produto em oferta
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Categoria</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>{isOffer(product.offer)}</TableCell>
                <TableCell>{product.category.name}</TableCell>
                <TableCell>
                  <Edit>
                    <HiOutlinePencilAlt
                      onClick={() => {
                        setVisible(true)
                        setSelectedProduct(product)
                      }}
                    />
                  </Edit>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditProductDialog
        visible={visible}
        setVisible={setVisible}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        products={products}
      />
    </Container>
  )
}
