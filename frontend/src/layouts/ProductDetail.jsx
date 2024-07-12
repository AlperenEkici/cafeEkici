import { Button, Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Product from '../components/Product';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ProductDetail() {
    let {kategoriId} = useParams()
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
       axios.get('http://localhost:8080/product/category/' + kategoriId).then((response)=>{
        setProduct(response.data)
       })

    },[kategoriId])
        
  return (
    <div>
      <Button onClick={()=>navigate(-1)} sx={{p:3}}>
        <ArrowBackIcon/>
        Geri
      </Button>
    <Container maxWidth='lg' >
      
      <Grid container justifyContent={'center'} spacing={3} alignItems={'center'}>
        {product.map(product => (
          <Product key={product.id} data ={product}/>
        )
        )}
      </Grid>
    </Container>
  </div>
  )
}
