import React from 'react'
import { useLocation } from 'react-router-dom'

import SideBar from '../../components/NavBar'
import { Menu } from '../../components/SideMenuAdmin'
import paths from '../../constants/path'
import Category from './Category'
import NewProduct from './NewProduct'
import { Orders } from './Orders'
import Products from './Products'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname } = useLocation()

  return (
    <Container>
      {/* <SideBar /> */}
      <Menu pathname={pathname} />
      <ContainerItems>
        {pathname === paths.Orders && <Orders />}
        {pathname === paths.Products && <Products />}
        {pathname === paths.NewProduct && <NewProduct />}
        {pathname === paths.Category && <Category />}
      </ContainerItems>
    </Container>
  )
}
