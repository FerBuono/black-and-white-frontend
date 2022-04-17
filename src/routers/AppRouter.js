import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShopScreen } from '../components/ShopScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ShopScreen />} />
        </Routes>
    </BrowserRouter>
  )
}
