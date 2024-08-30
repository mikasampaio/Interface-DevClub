import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineMenu } from 'react-icons/md'
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
  const theme = useTheme()

  const responsive = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  const { userData, logout } = useUser()
  const { totalItems } = useCart()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const isOpen = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      {responsive ? (
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={isOpen ? 'long-menu' : undefined}
            aria-expanded={isOpen ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MdOutlineMenu color="white" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
          >
            <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
            <MenuItem onClick={() => navigate('/produtos')}>Produtos</MenuItem>
            {userData.admin && (
              <MenuItem onClick={() => navigate('/pedidos')}>
                Painel de Administração
              </MenuItem>
            )}
          </Menu>
        </div>
      ) : (
        <ContainerRoutes>
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('/produtos')}>Produtos</a>
          {userData.admin && (
            <a onClick={() => navigate('/pedidos')}>Painel de Administração</a>
          )}
        </ContainerRoutes>
      )}

      <UserMenu>
        <IconsMenu onClick={() => navigate('/cart')}>
          <BsCart3 color={'#ffffff'} />
          <p>{totalItems}</p>
        </IconsMenu>
        <div className="line"></div>
        {!responsive && (
          <IconsMenu>
            <FaUserCircle color={'#ffffff'} />
          </IconsMenu>
        )}
        <Username>
          <p>Olá, {userData.name}</p>
          <a onClick={logoutUser}>Sair</a>
        </Username>
      </UserMenu>
    </Container>
  )
}
