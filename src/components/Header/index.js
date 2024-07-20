import React, { useEffect, useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerRoutes,
  Username,
  UserMenu,
  IconsMenu
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const { userData, logout } = useUser()
  const { totalItems } = useCart()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerRoutes>
        <a onClick={() => navigate('/')}>Home</a>
        <a onClick={() => navigate('/produtos')}>Produtos</a>
        {userData.admin && (
          <a onClick={() => navigate('/pedidos')}>Painel de Administração</a>
        )}
      </ContainerRoutes>

      <UserMenu>
        <IconsMenu onClick={() => navigate('/cart')}>
          <BsCart3 color={'#ffffff'} />
          <p>{totalItems}</p>
        </IconsMenu>
        <div className="line"></div>
        <IconsMenu>
          <FaUserCircle color={'#ffffff'} />
        </IconsMenu>
        <Username>
          <p>Olá, {userData.name}</p>
          <a onClick={logoutUser}>Sair</a>
        </Username>
      </UserMenu>
    </Container>
  )
}
