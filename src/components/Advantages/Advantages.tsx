import React from "react";
import {
  Heading,
  Flex,
  Box,
  Image,
  HStack,
} from "@chakra-ui/react";

interface AdvantageTextProps {
  number: number;
  text: string;
}

const AdvantageText = ({ number, text }: AdvantageTextProps) => (
  <HStack mb={2}>
    <Flex color="primaryLight" fontWeight={700} fontSize="28px" w="35px" justifyContent="center" >{number}</Flex>
    <Box fontSize="18px" fontWeight={400}>{text}</Box>
  </HStack>
);

const Advantages = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir={{
        base: "column",
        md:"row"
      }}
    >
      <Flex flex="1" justifyContent="center" alignItems="center" px={6}>
        <Image src="./img/image.png" maxW="400px" w="100%"/>
      </Flex>
      <Box flex="1" ps={2}>
        <Heading as="h3" fontSize="32px" mb={5} mt={{base: 5, md: 0}} opacity="0.4">
          Dlaczego my?
        </Heading>
        <AdvantageText number={1} text="Aplikacja jest całkowicie darmowa" />
        <AdvantageText number={2} text="Wystarczy dostęp do internetu, żeby korzystać" />
        <AdvantageText number={3} text="Możesz gromadzić nieograniczone ilości raportów" />
      </Box>
    </Flex>
  );
};

export default Advantages;
