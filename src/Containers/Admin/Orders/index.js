import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import { MiniDrawer } from '../../../components'
import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import Row from './row'
import status from './Select'
import { Container, Menu, NavLink, TableTitle } from './styles'

export function Orders() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])
  const [filterOrder, setFilterOrder] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filterOrder.map(ord => createData(ord))
    setRows(newRows)
  }, [filterOrder])

  useEffect(() => {
    async function loadOrder() {
      const { data } = await api.get('orders')

      setOrders(data)
      setFilterOrder(data)
    }

    loadOrder()
  }, [])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilterOrder(orders)
      setActiveStatus(status.id)
    } else {
      const filteredOrder = orders.filter(
        order => order.status === status.value
      )
      setFilterOrder(filteredOrder)
      setActiveStatus(status.id)
    }
  }

  useEffect(() => {
    if (activeStatus === 1) {
      setFilterOrder(orders)
    } else {
      const statusIndex = status.findIndex(stat => stat.id === activeStatus)

      if (statusIndex !== -1) {
        const filteredOrder = orders.filter(
          order => order.status === status[statusIndex].value
        )
        setFilterOrder(filteredOrder)
      }
    }
  }, [orders])

  return (
    <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Menu>
        {status &&
          status.map(status => (
            <NavLink
              key={status.id}
              isActive={activeStatus === status.id}
              onClick={() => handleStatus(status)}
            >
              {status.label}
            </NavLink>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableTitle>Pedido</TableTitle>
              <TableTitle>Cliente</TableTitle>
              <TableTitle>Data do pedido</TableTitle>
              <TableTitle>Status</TableTitle>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
