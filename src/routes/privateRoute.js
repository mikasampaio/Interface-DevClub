import PropTypes from 'prop-types'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { Header } from '../components/Header'
import { useUser } from '../hooks/UserContext'

function PrivateRoute({ children }) {
  const navigate = useNavigate()

  const {
    userData: { admin }
  } = useUser()

  const user = localStorage.getItem('devclub:customerData')

  if (!user) {
    navigate('/login')
  }

  if (admin && !JSON.parse(user).admin) {
    navigate('/')
  }

  return (
    <>
      <Header />
      {/* {!admin && <Header />} */}
      {children}
    </>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}

export default PrivateRoute
