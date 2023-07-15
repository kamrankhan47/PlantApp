import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Favorite} from '../../elements/icons';

interface PlantState {
  data: any;
  loading: boolean;
  error: null;
  favorite: any[];
}

const initialState: PlantState = {
  data: [],
  loading: false,
  error: null,
  favorite: [],
};

const PlantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    makeHeartRed: (state, action) => {
      const {item} = action.payload;
      if (state.favorite.find((q: any) => q.id === item.id)) {
        console.log('geldi');
        
        state.favorite = state.favorite.filter((q: any) => q.id !== item.id);
      } else {
        console.log('getdi');

        state.favorite.push(item);
      }
    },
  },

  extraReducers: {},
});

export const {makeHeartRed} = PlantSlice.actions;
export default PlantSlice.reducer;
