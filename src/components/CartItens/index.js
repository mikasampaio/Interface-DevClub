import React from 'react'
import { GiPaperBagFolded } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import {
  Container,
  ContainerCart,
  ContainerItems,
  ContainerQuantity,
  EmptyCart
} from './styles'

export function CartItens() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart()
  const navigate = useNavigate()

  return (
    <Container>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <ContainerCart key={product.id}>
            <ContainerItems>
              <ContainerQuantity>
                <img src={product.url} />
                <h5>{product.name}</h5>
                <p>{formatCurrency(product.price)}</p>
              </ContainerQuantity>
              <div className="quantity-select">
                <button onClick={() => decreaseProducts(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => increaseProducts(product.id)}>+</button>
              </div>
              <p className="price">
                {formatCurrency(product.price * product.quantity)}
              </p>
            </ContainerItems>
            <div className="line"></div>
          </ContainerCart>
        ))
      ) : (
        <EmptyCart>
          <GiPaperBagFolded style={{ color: '#c8161d', fontSize: 100 }} />
          <p>Monte um carrinho de compras!</p>
          <div>
            <Button onClick={() => navigate('/produtos')}>
              Conferir Produtos
            </Button>
          </div>
        </EmptyCart>
      )}
    </Container>
  )
}
