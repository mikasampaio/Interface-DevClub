import React from 'react'

import HeaderImage from '../../assets/cheeseburguer-grelhado.jpg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, Nav } from './styles'

export function Home() {
  return (
    <Container>
      <Nav src={HeaderImage} />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
