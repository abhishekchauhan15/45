import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import random from "../assets/random.jpg";

export default function ActionAreaCard({name, email, body}) {
  return (
    <Card sx={{ maxWidth: 345,  marginLeft:50 , marginTop:10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={random}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
