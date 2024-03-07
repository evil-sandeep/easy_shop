import { configureStore } from '@reduxjs/toolkit';
import { productListReducers } from './reducers/productReducers';



const store = configureStore({
  reducer: {
   productList:productListReducers
  },
 
});

export default store;