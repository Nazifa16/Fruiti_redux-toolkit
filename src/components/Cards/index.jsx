import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../../store/CardSlice";
import { Grid, Image, Box, Text, Button } from "@chakra-ui/react";

function Cards() {
  const dispatch = useDispatch();
  const { fruits_arr, basket } = useSelector((state) => state.card_state);

  const handleAddToBasket = (fruitId) => {
    dispatch(addToBasket(fruitId));
  };

  const isFruitInBasket = (fruitId) => {
    return basket.some((fruit) => fruit.id === fruitId);
  };

  const handleRemoveFromBasket = (fruitId) => {
    dispatch(removeFromBasket(fruitId));
  };

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
      {fruits_arr.map((fruit) => (
        <Box
          key={fruit.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image width={200} src={fruit.url} alt={fruit.name} />
          <Box p="6">
            <Text fontSize="lg" fontWeight="bold" mb="2">
              {fruit.name}
            </Text>
            <Text>Price: $ {fruit.price}</Text>
            {!isFruitInBasket(fruit.id) ? (
              <Button
                colorScheme=" green"
                onClick={() => handleAddToBasket(fruit.id)}
                px={7}
              >
                Add
              </Button>
            ) : (
              <Button
                colorScheme=" red"
                onClick={() => handleRemoveFromBasket(fruit.id)}
              >
                Remove
              </Button>
            )}
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default Cards;
