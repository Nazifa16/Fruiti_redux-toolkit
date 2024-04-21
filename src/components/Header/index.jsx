import React from "react";
import { Button, Flex, Heading, Badge, Center, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cards from "../Cards";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const { basket } = useSelector((state) => state.card_state);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        p="4"
        bg="pink.300"
        color="white"
        px="40px"
        gap={6}
      >
        <Heading as="h1" size="lg">
          Fruiti
        </Heading>

        <Box display="flex" gap={6}>
          <Button as="li" onClick={() => navigate("/home")}>
            Home
          </Button>

          <Button onClick={() => navigate("/basket")}>
            Basket
            <Badge p={1} colorScheme={basket.length === 0 ? "red" : "green"}>
              {basket.length}
            </Badge>
          </Button>
        </Box>
      </Flex>

      <Center marginTop={5}>
        <Cards />
      </Center>
    </div>
  );
}

export default Header;
