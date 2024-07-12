import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MenuCard(props) {
  const title = props.title
  const image = props.image
  return (
    <Card sx={{ maxWidth: 250 ,m:'auto',mt:15}} >
    <CardMedia
      sx={{ height: 150 }}
      image={image}
      title={title}
    />
    <CardContent style={{backgroundColor:"#544639",color:'wheat'}}>
      <Typography textAlign={'center'}gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      
    </CardContent>
  </Card>
  )
}
