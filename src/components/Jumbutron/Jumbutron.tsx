import React from "react";
import { Flex } from "@chakra-ui/react";
import background from "./../../img/background.jpg";

interface Jumbutron {}

const Jumbutron = ({}: Jumbutron) => {
  return (
    <Flex
      backgroundImage={background}
      backgroundSize="cover"
      backgroundPosition="center"
      w="100%"
      height="100vh"
      overflow="hidden"
      objectFit="cover"
      mb="-150px !important"
    ></Flex>
  );
};
export default Jumbutron;