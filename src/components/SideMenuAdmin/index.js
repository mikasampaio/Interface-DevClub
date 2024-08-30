import PropTypes from 'prop-types'
import React from 'react'
import { BiCategory, BiLogOut } from 'react-icons/bi'
import { BsBoxFill } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'
import { MdAddBusiness } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import paths from '../../constants/path'
import { useUser } from '../../hooks/UserContext'
import { Container, ContainerItems, ContainerList, Links } from './styles'

export function Menu({ pathname }) {
  const { logout } = useUser()
  const navigate = useNavigate()

  const links = [
    {
      id: 1,
      label: 'Pedidos',
      link: paths.Orders,
      icon: <FaShoppingBag />
    },
    {
      id: 2,
      label: 'Produtos',
      link: paths.Products,
      icon: <BsBoxFill />
    },
    {
      id: 3,
      label: 'Adicionar Produtos',
      link: paths.NewProduct,
      icon: <MdAddBusiness />
    },
    {
      id: 4,
      label: 'Categorias',
      link: paths.Category,
      icon: <BiCategory />
    }
  ]

  return (
    <Container>
      <ContainerList>
        {links.map(item => (
          <ContainerItems
            key={item.id}
            isActive={pathname === item.link}
            onClick={() => navigate(item.link)}
          >
            <span>{item.icon}</span>
            <Links>{item.label}</Links>
          </ContainerItems>
        ))}
      </ContainerList>

      <ContainerItems
        style={{ position: 'fixed', bottom: '20px' }}
        onClick={() => navigate('/login')}
      >
        <span>
          <BiLogOut />
        </span>
        <Links onClick={logout}>Sair</Links>
      </ContainerItems>
    </Container>
  )
}

Menu.propTypes = {
  pathname: PropTypes.string
}
