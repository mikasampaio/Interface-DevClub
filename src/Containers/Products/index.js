import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import HeaderImage from '../../assets/cheeseburguer-grelhado.jpg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Header,
  CategoriesMenu,
  CategoryLink,
  ContainerProducts
} from './styles'

export function Products() {
  const { state } = useLocation()

  let categoryId = 0

  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterProduct, setFilterProduct] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      const currentValue = data.map(product => {
        return { ...product, formatCurrent: formatCurrency(product.price) }
      })

      setProducts(currentValue)
    }

    loadCategory()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProduct(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilterProduct(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      {/* <Header src={HeaderImage} /> */}
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryLink
              key={category.id}
              isActive={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryLink>
          ))}
      </CategoriesMenu>
      <ContainerProducts>
        {filterProduct &&
          filterProduct.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerProducts>
    </Container>
  )
}
