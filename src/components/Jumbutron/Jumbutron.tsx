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
      minH="680px"
      overflow="hidden"
      objectFit="cover"
      marginTop={"-120px !important"}
      mb="-150px !important"
    ></Flex>
  );
};
export default Jumbutron;
