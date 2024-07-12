import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderPlaced } from '../../redux/orderSlice'
import './ordersplaced.css'


export default function OrdersPlaced() { 
    const [telefon,setTelefon]=useState()
    const orders = useSelector(state => state.order.filteredOrders)
    const distPatch = useDispatch()
   

    useEffect(()=>{
        console.log("render oldu")
    },[orders])
  return (
    <div>
        
            <Container maxWidth='lg' >
                <div className='form-group'>
                <div className="item">
                            <label htmlFor="Telefon" className="form-label">Telefon </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Telefon"
                                name="Telefon"
                                value={telefon}
                                onChange={(e) => setTelefon(e.target.value)}
                            />
                 
                <button onClick={()=>distPatch(orderPlaced(telefon))}>getir</button>
                </div>
                </div>
                {(orders.length > 0)? (
                <div>
                    <div className="titles">
                        <h3 className="product-id">Id</h3>
                        <h3 className="customer"> Müşteri</h3>
                        <h3 className="tel">Telefon</h3>
                        <h3 className="product">Ürün-Adet</h3>
                        <h3 className="order-state">Sipariş Durumu</h3>
                    </div>

                    <div className="order-items">
                        {orders.map((orderItem, index) => (
                            
                            <div key={index} className="order-item">
                                <h1 className='order-id'>{orderItem.id}</h1>
                                <h1 className='order-customer'>{orderItem.customer.ad.ad} {orderItem.customer.soyad.soyad}</h1>
                                <h1 className='order-phone'>{orderItem.customer.telefon.telefon}</h1>
                                
                                {orderItem.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="product">
                                        <h1 className='order-title'>{item.title}</h1>
                                        
                                        <h1 className='order-quantity'>{item.cartQuantity}</h1>
                                    </div>
                                ))}

                                <h1 className='order-state'>{orderItem.orderState}</h1>
                            </div>

                        ))}
                    </div>
                </div>
      ): <p className="no-orders">henüz sipariş bulunamadı</p>
            }
            </Container>
        </div>
  )
}
