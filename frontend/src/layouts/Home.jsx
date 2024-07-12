import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import axios from 'axios'
import Category from '../components/Category'

export default function Home() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/category/getAll").then((response) => {
      setCategory(response.data)

    }).catch((err) => { console.log(err) })

  }, [])


  return (
    <div>
      <Container maxWidth='lg' >
        <Grid container justifyContent={'center'} spacing={3} alignItems={'center'}>
          {category.map(category =>
            <Category key={category.id} data={category} />)
          }
        </Grid>
      </Container>
    </div>
  )
}
