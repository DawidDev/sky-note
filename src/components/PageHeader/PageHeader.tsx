import React from "react";
import { Button, Box, VStack, Text, HStack, Image } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import logotype from "../../img/logotype.svg"

interface PageHeaderProps {
  handleMenu: () => void;
}


export const Logotype = ({...props} : any) => (
  <Box {...props}>
    <Image src={logotype}/>
  </Box>
)

const PageHeader = ({ handleMenu }: PageHeaderProps) => {
  return (
    <HStack justifyContent="space-between" maxWidth="1200px" w="100%" position="sticky">
      <Logotype maxW="300px" />
      <Button onClick={handleMenu} variant="unstyled" color="textLight">
        <Icon path={mdiMenu} size="35px" />
      </Button>
    </HStack>
  );
};
export default PageHeader;
