import React from "react";
import { Text } from "@chakra-ui/react";

interface TitlePage {
  text: string;
}

const TitlePage = ({ text, ...props }: TitlePage) => {
  return (
    <Text
      color="textLight"
      fontSize={{
        base: "32px",
        md: "48px"
      }}
      my="16px"
      fontWeight={700}
      letterSpacing="0.75px"
      opacity="0.4"
    >
      {text}
    </Text>
  );
};
export default TitlePage;
