import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../PAGES/Home'
import Productlist from '../PAGES/Productlist'
import Basket from '../PAGES/Basket'

function RouterConfig() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/basket" element={<Basket />} />
      </Routes>
  )
}

export default RouterConfig