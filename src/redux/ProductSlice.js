import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //push data in products array
      state.productData.push(action.payload);
    },
    removeFromCart: (state, action) => {
      //remove data from products array
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCart,removeFromCart } = productSlice.actions;
export default productSlice.reducer;
