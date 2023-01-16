import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import background from "./../../img/background.jpg";
import ButtonAction from "../ButtonAction/ButtonAction";

interface Jumbutron {}

const Jumbutron = ({}: Jumbutron) => {
  return (
    <Flex
      backgroundImage={background}
      backgroundSize="cover"
      backgroundPosition="center"
      w="100vw"
      height="100vh"
      minH="680px"
      overflow="hidden"
      objectFit="cover"
      marginTop={"-140px !important"}
      mb="-150px !important"
    >
    </Flex>
  );
};
export default Jumbutron;
