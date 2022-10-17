import { createSlice } from "@reduxjs/toolkit";

const initialFoods = [ 
    {id: 1, image: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/8/9/0/CCETS201_Mofongo-relleno-at-cafe-el-punto_s4x3.jpg.rend.hgtvcom.406.305.suffix/1376158226936.jpeg', name: 'Skirt Steak Mofongo', description:'Seasoned mashed plantain garnished with skirt steak', rating: 5},
    {id: 2, image: 'https://www.seriouseats.com/thmb/fMfwR6_SOluWtgc7zHdzg3NQ3Ck=/1500x1125/filters:fill(auto,1)/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG', name: 'Tikka Masala', description:"Traditional Indian dish made up of chicken that's been marinated in yogurt, charred and simmered in a rich, creamy tomato-based spiced sauce", rating: 5},
    {id: 3, image: 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/27044813/5419901.jpg', name: 'Ratatouille', description:'a seasoned stew made of eggplant, tomatoes, green peppers, squash, and sometimes meat', rating: 5}
]

const options = {
    name: 'food',
    initialState: initialFoods,
    reducers: {
        addFood: (state, action) => [...state, {...action.payload,id: state.length + 1}],
        removeFood: (state, action) => state.filter(food => food.id !== action.payload.id),
        editFood: (state, action) => state.map(food => {
            return (food.id === action.payload.id) ? action.payload : food
        })
    }
}

const foodSlice = createSlice(options)

export const { addFood, removeFood, editFood } = foodSlice.actions

export const selectFood = state => state.food

export default foodSlice.reducer