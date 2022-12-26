import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

const LoadingSpinner = ({ ...props }: any) => {
  return (
    <Flex w="100%" height="300px" justifyContent="center" alignItems="center">
      <Spinner
        data-testid="spinner"
        thickness="3px"
        speed="1s"
        emptyColor="transparent"
        color="blue.500"
        size="xl"
        {...props}
      />
    </Flex>
  );
};

export default LoadingSpinner;
