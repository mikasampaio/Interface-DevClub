import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ContainerItens,
  Img,
  Button,
  ContainerProduct,
  H1
} from './styles'

export function OffersCarousel() {
  const [offerProducts, setOfferProducts] = useState()
  const { putProductCart } = useCart()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const offer = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatOffer: formatCurrency(product.price) }
        })

      setOfferProducts(offer)
    }

    loadOffers()
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
      <H1>Ofertas</H1>
      {/* <ContainerProduct> */}
      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '90%' }}
      >
        {offerProducts &&
          offerProducts.map(product => (
            <ContainerItens key={product.id}>
              <Img src={product.url} />
              <div>
                <p>{product.name}</p>
                <h4>{product.formatOffer}</h4>
              </div>
              <Button onClick={() => formatCurrency(putProductCart(product))}>
                Adicionar ao carrinho
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
      {/* </ContainerProduct> */}
    </Container>
  )
}
