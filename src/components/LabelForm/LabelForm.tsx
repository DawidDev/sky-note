import React from "react";
import { Text } from "@chakra-ui/react";

interface LabelForm {
  text: string;
}

const LabelForm = ({ text }: LabelForm) => {
  return (
    <Text
      color="textLight"
      fontSize="18px"
      fontWeight={500}
      letterSpacing="0.15px"
    >
      {text}
    </Text>
  );
};
export default LabelForm;
