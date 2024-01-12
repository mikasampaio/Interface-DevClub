import React, { useState, useEffect } from 'react'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, Title, ContainerItems } from './styles'

export function CartResume() {
  const [finalPrice, setfinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const [totalItems, setTotalItems] = useState()
  const { cartProducts } = useCart()

  useEffect(() => {
    const sumItems = cartProducts.reduce((acc, cur) => {
      return cur.price * cur.quantity + acc
    }, 0)

    const totalItems = cartProducts.reduce((acc, cur) => {
      return cur.quantity + acc
    }, 0)

    setfinalPrice(sumItems)
    setTotalItems(totalItems)
  }, [cartProducts])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await api.post('orders', {
      products: order
    })
  }

  return (
    <Container>
      <Title>Resumo da compra</Title>
      <div className="line"></div>
      <ContainerItems>
        <div className="product-price">
          <p>Produto ({totalItems})</p>
          <p>{formatCurrency(finalPrice)}</p>
        </div>
        <div className="product-price">
          <p>Frete</p>
          <p>{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="product-total">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>

        <Button onClick={submitOrder}>Finalizar a compra</Button>
      </ContainerItems>
    </Container>
  )
}
