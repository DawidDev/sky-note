import React from "react";
import { SimpleGrid, Box, useBreakpointValue } from "@chakra-ui/react";

interface ItemListSm {
  data: Array<string>;
  onClick?: () => void; // do decyzji
  link?: string; // do decyzji
}

const ItemListSm = ({ data, link = "#" }: ItemListSm) => {
  const dataDisplay = data.map((el, index) => <Box key={index}>{el}</Box>);
  const totalDataDisplay = useBreakpointValue({
    base: dataDisplay.slice(0, 2),
    md: dataDisplay.slice(0, 3),
    lg: dataDisplay.slice(0, data.length),
  });

  return (
    <SimpleGrid
      columns={{
        base: 2,
        md: 3,
        lg: data.length,
      }}
      spacingX="40px"
      spacingY="0"
      color="textLight"
      backgroundColor="itemList"
      py="10px"
      px="20px"
      borderRadius={6}
      _hover={{
        backgroundColor: "itemListHover",
      }}
      transition=".35s"
      cursor="pointer"
      maxW="100%"
    >
      {totalDataDisplay}
    </SimpleGrid>
  );
};
export default ItemListSm;
