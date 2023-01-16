import React, { useEffect, useState } from "react";
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

  const [scroll, setScroll] = useState(0);
  const [background, setBackground] = useState('transparent');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]);

  function handleScroll() {
    setScroll(window.pageYOffset);
    if (scroll > 50) {
      setBackground('#001834');
    } else {
      setBackground('transparent')
    }
  }
  return (
    <HStack justifyContent="space-between" w="100%" px="24px" transition="0.25s" position="fixed" backgroundColor={background}>
      <Logotype maxW="300px" />
      <Button onClick={handleMenu} variant="unstyled" color="textLight">
        <Icon path={mdiMenu} size="35px" />
      </Button>
    </HStack>
  );
};
export default PageHeader;
