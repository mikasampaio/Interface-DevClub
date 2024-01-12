import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async CustomerData => {
    setUserData(CustomerData)

    await localStorage.setItem(
      'devclub:customerData',
      JSON.stringify(CustomerData)
    )
  }

  const logout = async () => {
    await localStorage.removeItem('devclub:customerData')
  }

  useEffect(() => {
    const loadingCustomerData = async () => {
      const customerInfo = await localStorage.getItem('devclub:customerData')

      if (customerInfo) {
        setUserData(JSON.parse(customerInfo))
      }
    }

    loadingCustomerData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with userContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
