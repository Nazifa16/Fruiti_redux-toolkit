import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits_arr: [
    {
      id: 1,
      name: "Apple",
      url: "",
      price: 1.5,
      count: 0,
      total_price: 0,
      condition_for_add_remove: false,
    },
    {
      id: 2,
      name: "Lime",
      url: "",
      price: 0.75,
      count: 0,
      total_price: 0,
      condition_for_add_remove: false,
    },
    {
      id: 3,
      name: "Orange",
      url: "",
      price: 0.9,
      count: 0,
      total_price: 0,
      condition_for_add_remove: false,
    },
  ],
  basket: [],
};

const cardSlice = createSlice({
  name: "Fruit",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const fruitToAdd = state.fruits_arr.find(
        (fruit) => fruit.id === action.payload
      );
      if (fruitToAdd) {
        fruitToAdd.count = 1; // Reset count to 1 when adding again
        fruitToAdd.total_price = fruitToAdd.count * fruitToAdd.price;
        fruitToAdd.condition_for_add_remove = true;
        state.basket.push(fruitToAdd);
      }
    },
    removeFromBasket: (state, action) => {
      const fruitToRemoveIndex = state.basket.findIndex(
        (fruit) => fruit.id === action.payload
      );
      if (fruitToRemoveIndex !== -1) {
        state.basket.splice(fruitToRemoveIndex, 1);
      }
    },
    increaseCount: (state, action) => {
      const fruitToUpdate = state.basket.find(
        (fruit) => fruit.id === action.payload
      );
      if (fruitToUpdate) {
        fruitToUpdate.count++;
        fruitToUpdate.total_price = fruitToUpdate.count * fruitToUpdate.price;
      }
    },
    decreaseCount: (state, action) => {
      const fruitToUpdate = state.basket.find(
        (fruit) => fruit.id === action.payload
      );
      if (fruitToUpdate && fruitToUpdate.count > 0) {
        fruitToUpdate.count--;
        fruitToUpdate.total_price = fruitToUpdate.count * fruitToUpdate.price;
      }
    },
  },
});

export const { addToBasket, removeFromBasket, increaseCount, decreaseCount } =
  cardSlice.actions;

export default cardSlice.reducer;
