import React, { useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { addtoCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../redux/cardSlice';
import {createOrder} from '../redux/orderSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Cart() {
    const order = useSelector(state => state.order)
    const cart = useSelector(state => state.cart)
    const distPatch = useDispatch()
   
    useEffect(() => {
        distPatch(getTotals())
    }, [cart, distPatch])
    
    return (
        <div>
            <Container className='cart-container' maxWidth='lg' >

                <h2>Sepet</h2>
                {cart.cart.length === 0 ? (
                    <div className="cart-empty">
                        <p>Sepetiniz Boş</p>
                        <div className="start-shopping">
                            <Link to="/">
                                <ArrowBackIcon />
                                <span>Ürünlere Göz At</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>

                        <div className="titles">
                            <h3 className="product-title">Ürün</h3>
                            <h3 className="price"> Fiyat</h3>
                            <h3 className="quantity">Adet</h3>
                            <h3 className="total">Toplam</h3>
                        </div>

                        <div className="cart-items">
                            {cart.cart?.map(cartItem => (
                                <div className='cart-item' key={cartItem.id}>
                                    <div className="cart-product">
                                        <img src={cartItem.image} alt={cartItem.title} />
                                        <div>
                                            <h3>{cartItem.title}</h3>
                                            <button onClick={() => distPatch(removeFromCart({ id: cartItem.id, title: cartItem.title }))}><DeleteForeverIcon/></button>
                                        </div>
                                    </div>

                                    <div className="cart-product-price">
                                        {cartItem.price}₺
                                    </div>

                                    <div className="cart-product-quantity">
                                        <button onClick={() => distPatch(decreaseCart({ id: cartItem.id, title: cartItem.title }))}>-</button>
                                        <div className="count">{cartItem.cartQuantity}</div>
                                        <button onClick={() => distPatch(addtoCart({ id: cartItem.id, title: cartItem.title, image: cartItem.image, price: cartItem.price }))}>+</button>
                                    </div>

                                    <div className="cart-product-total-price">
                                        {cartItem.price * cartItem.cartQuantity}₺
                                    </div>
                                </div>

                            ))}
                            <div className="cart-summary">
                                <button className="clear-btn" onClick={() => distPatch(clearCart())}>Sepeti Temizle</button>
                                <img style={{width:'150px',marginRight:10,borderRadius:100}} src='data:image/png;base64,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'/>
        
                                <div className="cart-checkout">
                                    <div className="subtotal">
                                        <span>Ara Toplam</span>
                                        <span className="amount">{cart.cartTotalAmount}₺</span>
                                    </div>
                                    <button >
                                        <Link to="/orderConfirm">
                                        Onayla</Link>
                                        </button>
                                    <div className="continue-shopping">
                                        <Link to="/">
                                            <ArrowBackIcon />
                                            <span>Alışverişe Devam Et</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}

            </Container>
        </div>
    )
}
