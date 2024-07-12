import { Grid } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'

export default function Product(props) {
    const { id,productName, productPicture, price } = props.data
    return (
        <Grid xs={12} md={4} sm={6} item>
            <ProductCard id={id} title={productName} image={productPicture} price={price} />
        </Grid>
    )
}
