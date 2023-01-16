import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Logotype } from "../PageHeader/PageHeader";

const Footer = () => {
  return (
    <VStack justifyContent="center" my="80px" spacing="16px" >
      <Box maxW="200px">
        <Logotype />
        <Text textAlign="center" opacity="0.6" letterSpacing="2px">
          Dawid Rożak
        </Text>
      </Box>
      <Text fontSize="12px" letterSpacing="0.5px">Wszelkie prawa zastrzeżone</Text>
    </VStack>
  );
};

export default Footer;
