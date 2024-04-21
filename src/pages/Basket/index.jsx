import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  increaseCount,
  decreaseCount,
} from "../../store/CardSlice";
import { Grid, Image, Box, Text, Button } from "@chakra-ui/react";

function Basket() {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.card_state);

  const handleRemoveFromBasket = (fruitId) => {
    dispatch(removeFromBasket(fruitId));
  };

  const handleIncreaseCount = (fruitId) => {
    dispatch(increaseCount(fruitId));
  };

  const handleDecreaseCount = (fruitId) => {
    dispatch(decreaseCount(fruitId));
  };

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={6}
      margin={6}
    >
      {basket.map((fruit) => (
        <Box
          key={fruit.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          margin={6}
        >
          <Image height={200} width={200} src={fruit.url} alt={fruit.name} />
          <Box
            p="6"
            display="flex"
            justifyContent="flex-start"
            gap="16px"
            flexDirection="column"
          >
            <Text fontSize="lg" fontWeight="bold" mb="2">
              {fruit.name}
            </Text>
            <Text>Price: $ {fruit.price}</Text>

            <Text>Total: $ {fruit.total_price}</Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="16px"
            >
              <Button
                bg="green.300"
                color="white"
                onClick={() => handleIncreaseCount(fruit.id)}
              >
                +
              </Button>
              <Text> {fruit.count}</Text>
              <Button
                bg="pink.400"
                color="white"
                onClick={() => handleDecreaseCount(fruit.id)}
              >
                -
              </Button>
            </Box>
            {fruit.count === 0 && (
              <Button
                colorScheme="red"
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

export default Basket;
