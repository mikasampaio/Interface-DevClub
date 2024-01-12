/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { BsBoxFill } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdAddBusiness
} from 'react-icons/md'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { useNavigate } from 'react-router-dom'

import paths from '../../constants/path'
import { useUser } from '../../hooks/UserContext'
import { ContainerItems, Links } from '../SideMenuAdmin/styles'

export default function SideBar({ pathname }) {
  const [collapsed, setCollapsed] = useState(false)
  const [toggled, setToggled] = useState(true)
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
    }
  ]

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="always"
        collapsed={collapsed}
        backgroundColor="#c8161d"
      >
        <Menu>
          {collapsed ? (
            <div>
              <MdOutlineKeyboardDoubleArrowRight />
            </div>
          ) : (
            <div>
              <MdOutlineKeyboardDoubleArrowLeft />
            </div>
          )}
          <button
            className=""
            onClick={() => {
              setCollapsed(!collapsed)
            }}
          >
            Abrir
          </button>
          {links.map(item => (
            <ContainerItems
              key={item.id}
              isActive={pathname === item.link}
              onClick={() => navigate(item.link)}
            >
              {/* <span>{item.icon}</span>
              <Links>{item.label}</Links> */}
              <MenuItem icon={item.icon}>{item.label}</MenuItem>
            </ContainerItems>
          ))}
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button
            className="sb-button"
            onClick={() => {
              setToggled(!toggled)
            }}
          >
            <FiMenu />
          </button>
        </div>
      </main>
    </div>
  )
}

SideBar.propTypes = {
  pathname: PropTypes.string
}
