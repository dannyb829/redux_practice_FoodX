import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from './ELEMENTS/Nav';
import { Grid } from '@mui/material';
import FoodCard from './app/Features/food/FoodCard';
import { useSelector } from 'react-redux';
import { selectFood } from './app/Features/food/foodSlice';
import FoodForm from './app/Features/food/FoodForm';

function App() {
  const foods = useSelector(selectFood) || []
console.log('foods',foods)
  const plates = foods.map(food => (
    <FoodCard food={food} />
  ))

  return (
    <>
    <Nav/>
    <div className="App">
      <Grid container spacing={2} margin='auto' padding='2rem'>
        <Grid item xs={12} >
        <h1 padding={0} width='10%'>Experiences</h1>
        </Grid>
        {plates}
      </Grid>
      <FoodForm/>
    </div>
    </>
  );
}

export default App;
