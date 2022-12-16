import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonActionProps {
  label: string;
  handleClick: () => void;
  variant?: boolean;
  isBig?: boolean;
}

const ColorfullButton = ({ label, ...props }: any) => (
  <Button
    color="textLight"
    backgroundColor="bg_button.main"
    _hover={{
      opacity: "0.9",
    }}
    _active={{
      backgroundColor: "bg_button.second",
    }}
    {...props}
  >
    {label}
  </Button>
);

const BorderButton = ({ label, ...props }: any) => (
  <Button
    color="textLight"
    border="1px solid"
    borderColor="primaryLight"
    bg="none"
    _hover={{
      backgroundColor: "bg_button.main",
    }}
    _active={{
      backgroundColor: "bg_button.second",
    }}
    {...props}
  >
    {label}
  </Button>
);

const ButtonAction = ({
  label,
  handleClick,
  variant = true,
  isBig,
  ...props
}: ButtonActionProps) => {
  // Przycisk domyślnie będzie automatycnie dopasowywany do tekstu
  const sizeWidth = isBig && { w: "100%", maxW: "220px" };

  const baseProps = {
    borderRadius: "6",
    fontWeight: "500",
    h: "40px",
    ...sizeWidth,
    fontSize: "18px",
    onClick: handleClick,
    label: label,
  };

  return (
    <>
      {variant ? (
        <ColorfullButton {...baseProps} {...props} />
      ) : (
        <BorderButton {...baseProps} {...props} />
      )}
    </>
  );
};
export default ButtonAction;
