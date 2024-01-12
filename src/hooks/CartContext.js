import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const [totalItems, setTotalItems] = useState([])

  const updateLocalStorage = async product => {
    await localStorage.setItem('devclub:cartData', JSON.stringify(product))
  }

  const putProductCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newProducts = []
    if (cartIndex >= 0) {
      newProducts = cartProducts
      newProducts[cartIndex].quantity += 1

      setCartProducts(newProducts)
    } else {
      product.quantity = 1
      newProducts = [...cartProducts, product]
      setCartProducts(newProducts)
    }

    await updateLocalStorage(newProducts)
  }

  const deleteProduct = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)

    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)
      await updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  useEffect(() => {
    const total = cartProducts.reduce((acc, cur) => {
      return acc + cur.quantity
    }, 0)

    setTotalItems(total)
  }, [cartProducts])

  useEffect(() => {
    const loadingCartData = async () => {
      const cartData = await localStorage.getItem('devclub:cartData')

      if (cartData) {
        setCartProducts(JSON.parse(cartData))
      }
    }

    loadingCartData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
