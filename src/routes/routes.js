import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import paths from '../constants/path'
import { Admin, Cart, Home, Login, Products, Register } from '../Containers'
import PrivateRoute from './privateRoute'

function Navigate() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path="/"
        />
        <Route
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
          path="/produtos"
        />
        <Route
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
          path="/cart"
        />
        <Route
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
          path={paths.Orders}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
          path={paths.Products}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
          path={paths.NewProduct}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
          path={paths.Category}
        />
      </Routes>
    </Router>
  )
}

export default Navigate
