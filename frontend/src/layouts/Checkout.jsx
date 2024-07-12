import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cardSlice'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export default function Checkout() {
    const cartItems = useSelector(state => state.cart.cart)
    const distpatch = useDispatch()
    return (
        <div>
            {
                cartItems.map(item => (
                    <Card sx={{ maxWidth: 250, m: 'auto', mt: 2 }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image={item.image}
                        />
                        <CardContent>
                            <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                                {item.price}₺
                            </Typography>
                            <CardActions>
                                <Button size="small" onClick={() => distpatch(removeFromCart({ id: item.id }))}>Remove</Button>
                            </CardActions>
                            <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                                miktar:{item.cartQuantity}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }

        </div>
    )
}
