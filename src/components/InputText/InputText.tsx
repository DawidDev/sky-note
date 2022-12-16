import React from "react";
import { Input } from "@chakra-ui/react";

interface InputTextProps {
  onChange: () => void
  placeholder: string
} 

const InputText = ({
  onChange, placeholder
}: InputTextProps) => {
  return (
    <Input
      color="textLight"
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
    />
  );
};
export default InputText;
