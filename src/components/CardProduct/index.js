import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { ContainerProduct, Img, Button } from './styles'

export function CardProduct({ product }) {
  const { putProductCart } = useCart()

  return (
    <ContainerProduct>
      <Img src={product.url} />
      <div>
        <p>{product.name}</p>
        <h4>{product.formatCurrent}</h4>
      </div>
      <Button onClick={() => putProductCart(product)}>
        Adicionar ao carrinho
      </Button>
    </ContainerProduct>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
