import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { getState }) => {
    const state = getState();
    const userId = state.auth.user.id;
    const response = await axios.get(
      `http://localhost:3000/cart?userId=${userId}`
    );
    return response.data;
  }
);

let nextCartId = 1;

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, { getState }) => {
    const state = getState();
    const userId = state.auth.user.id;
    const existingItem = state.cart.cartItems.find(
      (item) => item.id === product.id && item.userId === userId
    );

    let response;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + product.quantity,
      };
      response = await axios.put(
        `http://localhost:3000/cart/${existingItem.id}`,
        updatedItem
      );
    } else {
      const newItem = { ...product, quantity: 1, cartId: nextCartId++, userId };
      const addToCartResponse = await axios.post(
        "http://localhost:3000/cart",
        newItem
      );
      response = {
        data: {
          ...addToCartResponse.data,
          cartId: newItem.cartId,
        },
      };

      // console.log("tambah ke cart:", response.data); // log buat cek cartIdnya
    }

    const updatedItem = response.data;

    return updatedItem;
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }) => {
    const response = await axios.patch(`http://localhost:3000/cart/${id}`, {
      quantity,
    });
    return response.data;
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`);
    return id;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const existingItemIndex = state.cartItems.findIndex(
          (item) =>
            item.id === action.payload.id &&
            item.userId === action.payload.userId
        );
        if (existingItemIndex !== -1) {
          state.cartItems[existingItemIndex] = action.payload;
        } else {
          state.cartItems.push(action.payload);
        }
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const existingItemIndex = state.cartItems.findIndex(
          (item) =>
            item.id === action.payload.id &&
            item.userId === action.payload.userId
        );
        if (existingItemIndex !== -1) {
          state.cartItems[existingItemIndex] = action.payload;
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export default cartSlice.reducer;
