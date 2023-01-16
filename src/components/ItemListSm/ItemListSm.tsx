import React from "react";
import {
  SimpleGrid,
  Box,
  useBreakpointValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ItemListSm {
  data: Array<string>;
  onClick?: () => void; // do decyzji
  link?: string;
  isHeader?: boolean
}

const ItemListSm = ({ data, link = "#", isHeader }: ItemListSm) => {
  const dataDisplay = data.map((el, index) => (
    <Link key={index} to={link}>
      <Box>{el}</Box>
    </Link>
  ));
  const totalDataDisplay = useBreakpointValue({
    base: dataDisplay.slice(0, 2),
    md: dataDisplay.slice(0, 3),
    lg: dataDisplay.slice(0, data.length),
  });

  const headerDisplay = data.map((el, index)=> (
    <Box key={index}>{el}</Box>
  ))

  const totalHeaderDisplay = useBreakpointValue({
    base: headerDisplay.slice(0, 2),
    md: headerDisplay.slice(0, 3),
    lg: headerDisplay.slice(0, data.length),
  });


  const variantStyle = {
    backgroundColor: !isHeader ? "itemList" : "none",
    _hover:{
      backgroundColor: !isHeader ? "itemListHover" : "none",
    },
    fontWeight: isHeader ? 800 : 400,
    letterSpacing: isHeader ? "0.5px" : "none"
  }

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
      py="10px"
      px="20px"
      borderRadius={6}
      transition=".35s"
      maxW="100%"
      data-testid="item-list-sm" 
      {...variantStyle}
    >
      {isHeader ? totalHeaderDisplay : totalDataDisplay}
    </SimpleGrid>
  );
};
export default ItemListSm;
