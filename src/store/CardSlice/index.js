import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits_arr: [
    {
      id: 1,
      name: "Apple",
      url: "https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg",
      price: 1.5,
      count: 0,
      total_price: 0,
      condition_for_add_remove: false,
    },
    {
      id: 2,
      name: "Lime",
      url: "https://st3.depositphotos.com/4759011/14681/i/450/depositphotos_146819231-stock-photo-lime-with-leaf-isolated-on.jpg",
      price: 0.75,
      count: 0,
      total_price: 0,
      condition_for_add_remove: false,
    },
    {
      id: 3,
      name: "Orange",
      url: "https://shaguftaz.com/wp-content/uploads/2020/12/orange.jpg",
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
        fruitToAdd.count++;
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
        state.basket[fruitToRemoveIndex].count = 0;
        state.basket[fruitToRemoveIndex].total_price = 0;
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
