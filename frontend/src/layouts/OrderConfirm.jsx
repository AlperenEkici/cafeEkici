import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createOrder } from '../redux/orderSlice'
import './orderConfirm.css'
import { clearCart, removeFromCart } from '../redux/cardSlice'

export default function OrderConfirm() {
    const [ad, setAd] = useState("")
    const [soyad, setSoyad] = useState("")
    const [telefon, setTelefon] = useState(0)
    const order = useSelector(state => state.order)
    const distPatch = useDispatch()
    return (
        <Grid container justifyContent="center" xs={12}>
            <div >
                <h2>Sipariş</h2>
                <form>
                    <div>
                        <div className="item">
                            <label htmlFor="Ad" className="form-label">Ad </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Ad"
                                name="Ad"
                                value={ad}
                                onChange={(e) => setAd(e.target.value)}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="Soyad" className="form-label">Soyad </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Soyad"
                                name="Soyad"
                                value={soyad}
                                onChange={(e) => setSoyad(e.target.value)}
                            />
                        </div>
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
                        </div>
                    </div><Link to="/">
                        <button onClick={() => {
                            distPatch(createOrder({ ad: { ad }, soyad: { soyad }, telefon: { telefon } }));
                            distPatch(clearCart())
                    }}>
                            Onayla
                        </button></Link>
                    <Link className="btn btn-outline-danger " to="/cart">
                        Cancel
                    </Link>
                    
                   
                </form>
            </div>
        </Grid>
    )
}
