import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import {
  Container,
  ContainerItens,
  Img,
  Button,
  ContainerCategory,
  H1
} from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState()

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategory()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 480, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <H1>Categorias</H1>
      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '90%' }}
      >
        {/* <ContainerCategory> */}
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Img src={category.url} />
              <Button to="./produtos" state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </ContainerItens>
          ))}
        {/* </ContainerCategory> */}
      </Carousel>
    </Container>
  )
}
