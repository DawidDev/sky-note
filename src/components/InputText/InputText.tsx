import React from "react";
import { FormControl, Input } from "@chakra-ui/react";

interface InputTextProps {
  onChange: (e:any) => void;
  placeholder: string;
  value: string;
  isRequired?: boolean;
}

const InputText = ({ onChange, placeholder, value, isRequired = false}: InputTextProps) => {
  return (
    <FormControl isRequired={isRequired}>
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
    </FormControl>
  );
};
export default InputText;
