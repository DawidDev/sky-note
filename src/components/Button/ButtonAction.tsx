import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonActionProps {
    label: string,
    handleClick: () => void
}

const ButtonAction = ({ label, handleClick }: ButtonActionProps) => {
  return (
    <Button
      colorScheme="blue"
      color="gray.700"
      backgroundColor="bg_button.main"
      borderRadius={6}
      _hover={{
        opacity: "0.9",
      }}
      _active={{
        backgroundColor: "bg_button.second"
      }}
    >
      {label}
    </Button>
  );
};
export default ButtonAction;
