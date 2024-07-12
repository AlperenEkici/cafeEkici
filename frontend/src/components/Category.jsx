import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuCard from './CategoryCard'

export default function Category(props) {
    const {id,categoryName,categoryPicture} = props.data
    return (
        <Grid xs={12} md={4} sm={6} item>
            <Link to={`/category/${id}`} style={{ textDecoration: 'none' }}>
                <MenuCard title={categoryName} image={categoryPicture} />
            </Link>
        </Grid>
    )
}
