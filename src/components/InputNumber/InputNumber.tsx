import React from "react";
import {
  FormControl,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";

interface InputNumberProps {
  onChange: (e: any) => void;
  additionalText: string;
  value: number;
}

const InputNumber = ({ onChange, additionalText, value }: InputNumberProps) => {
  return (
    <FormControl display="flex" flexDir="row" alignItems="center">
      <NumberInput
        marginRight="16px"
        color="textLight"
        fontSize="15px"
        borderColor="inputBorder"
        _focus={{
          border: "none !important",
          outline: "none !important",
        }}
        _hover={{
          borderColor: "inputBorder",
        }}
        onChange={onChange}
        value={value}
      >
        <NumberInputField />
      </NumberInput>
      <Text fontSize="18px">{additionalText}</Text>
    </FormControl>
  );
};
export default InputNumber;
