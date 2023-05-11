import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slices'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProtectRotes from './pages/ProtectRotes'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectRotes />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/purchases' element={<Purchases />} />


      </Routes>
    </>
  )
}

export default App
