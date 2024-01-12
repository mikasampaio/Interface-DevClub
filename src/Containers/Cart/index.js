import React from 'react'

import { CartItens, CartResume } from '../../components'
import { Container } from './styles'

export function Cart() {
  return (
    <Container>
      <CartItens />
      <CartResume />
    </Container>
  )
}
