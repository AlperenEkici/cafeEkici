import React from 'react'
import Home from './Home'
import ProductDetail from './ProductDetail'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Cart from './Cart'
import AdminHome from '../admin/AdminHome'
import EditProduct from '../admin/layouts/EditProduct'
import AddProduct from '../admin/layouts/AddProduct'
import OrderConfirm from './OrderConfirm'
import Order from '../admin/layouts/Order/Order'
import OrdersPlaced from './ordersPlaced/OrdersPlaced'

export default function Dashboard() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path="/category/:kategoriId" element={<ProductDetail/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<AdminHome/>}/>
        <Route exact path='/addproduct' element={<AddProduct />} />
        <Route exact path="/editproduct/:id" element={<EditProduct/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/orderConfirm" element={<OrderConfirm/>}/>
        <Route path="/orderPlaced" element={<OrdersPlaced/>}/>
        </Routes>   
    </BrowserRouter>
  )
}
