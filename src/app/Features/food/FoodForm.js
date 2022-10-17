import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addFood } from './foodSlice';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FoodForm() {
  const [foodDetails, setFoodDetails] = useState({name:'',description:'', image:'',rating: 0});
  const { name, description, image } = foodDetails

  const dispatch = useDispatch()

  const handleChange = ({target: { name, value }}) => {
    setFoodDetails({...foodDetails,[name]: value});
  };

  const handleSubmit = () => {
    dispatch(addFood(foodDetails))
  }

  return (


    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Food name"
          multiline
          maxRows={4}
          name='name'
          value={name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-textarea"
          label="Image URL"
          name='image'
          multiline
          value={image}
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          name='description'
          rows={4}
          value={description}
          onChange={handleChange}
        />
      </div>
      <Button variant='contained' onClick={handleSubmit}>Add</Button>
    </Box>
        </AccordionDetails>
      </Accordion>
  );
}
