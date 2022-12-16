import React from "react";
import { Input } from "@chakra-ui/react";

interface InputTextProps {
  onChange: () => void;
  placeholder: string;
  value: string;
}

const InputText = ({ onChange, placeholder, value }: InputTextProps) => {
  return (
    <Input
      color="textLight"
      fontSize="15px"
      placeholder={placeholder}
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
    />
  );
};
export default InputText;
