import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cardSlice';
import {useNavigate} from 'react-router-dom';

export default function ProductCard(props) {
  const id = props.id
  const title = props.title
  const image = props.image
  const price = props.price
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 200, m: 'auto', mt: 15 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={image}
        title={title}
      />
      <CardContent style={{backgroundColor:"#544639",color:'wheat'}}>
        <Typography textAlign={'center'} gutterBottom variant="h5" component="div" >
          {title}
        </Typography>
        <Typography textAlign={'center'} variant="h4" >
          {price} ₺
        </Typography>
        <CardActions >
          <Button size="small" color='error' onClick={() => {
            dispatch(addtoCart({ id, title, image, price }));
            navigate("/cart")
          }}>
            Sepete Ekle
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
