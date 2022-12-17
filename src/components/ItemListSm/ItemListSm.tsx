import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

interface ItemListSm {
  data: Array<string>;
  onClick?: () => void; // do decyzji
  link?: string; // do decyzji
}

const ItemListSm = ({ data, link = '#' }: ItemListSm) => {
  const countColumns = data.length;

  const dataDisplay = data.map((el, index) => <Box key={index}>{el}</Box>);

  return (
    <SimpleGrid
      columns={countColumns}
      spacingX="40px"
      spacingY="0"
      color="textLight"
      backgroundColor="itemList"
      py="10px"
      px="20px"
      borderRadius={6}
      _hover={{
        backgroundColor: "#272D81"
      }}
      transition=".35s"
      cursor="pointer"
    >
      {dataDisplay}
    </SimpleGrid>
  );
};
export default ItemListSm;