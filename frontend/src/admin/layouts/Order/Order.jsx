import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './order.css'
import { Container } from '@mui/material';
import { updateOrder } from '../../../redux/orderSlice';
import { useNavigate } from 'react-router-dom';

export default function Order() {
    const orders = useSelector(state => state.order.order)
    const distPatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <div className='panel'>
                <button className='panel-list' onClick={()=>navigate("/admin")}>Products</button>
                <button className='panel-list' onClick={()=>navigate("/order")}>Orders</button>
            </div>
            <Container maxWidth='lg' >
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
                                
                                <select value={orderItem.orderState} onChange={(event)=>{
                                    distPatch(updateOrder({id:orderItem.id,orderState:event.target.value}));
                                    }}>
                                    <option value="Bekleniyor">Bekleniyor</option>
                                    <option value="Hazırlanıyor">Hazırlanıyor</option>
                                    <option value="Hazır">Hazır</option>
                                    <option value="Teslim Edildi">Teslim Edildi</option>
                                </select>
                            </div>

                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
