import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { editFood } from './foodSlice';

export default function FoodCard({ food }) {
  const dispatch = useDispatch()

  function handleRating({ target: { value } }) {
    dispatch(editFood({ ...food, rating: value }))
  }

  return (
    <Grid item x={12} md={6} lg={3}>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={food.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {food.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {food.description.slice(0,40)}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography component="legend">rating</Typography>
        <Rating
          name="simple-controlled"
          value={food.rating}
          onChange={handleRating}
        />
      </Card>
    </Grid>
  );
}