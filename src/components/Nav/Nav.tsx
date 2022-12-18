import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  useBreakpointValue,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";



interface Nav {
  isOpen: boolean;
  onClose: () => void;
}

const Nav = ({ isOpen, onClose }: Nav) => {
  const variant = useBreakpointValue({
    base: "full",
    md: "sm",
    lg: "sm",
  });

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={variant}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="menuBackground" color="textLight">
          <DrawerCloseButton me={8} mt={5} size="25px" />

          <DrawerBody
            display="flex"
            alignItems={{ base: "center", md: "flex-start" }}
            pt={{ md: "30%" }}
          >
            <Stack flexDir="column" fontSize="24px" spacing={4}>
            
              <NavLink to="/">Strona główna</NavLink>
              <NavLink to="konto">Konto</NavLink>
              <NavLink to="observation-list">Biblioteka gwiazd</NavLink>
              <NavLink to="konto" >Dodaj obserwacje</NavLink>
              <NavLink to="konto">Moje raporty</NavLink>
              <NavLink to="konto">Panel użytkownika</NavLink>
         
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Text
              opacity="0.5"
              fontSize="15px"
              fontWeight={400}
              letterSpacing="0.75px"
              mb="25px"
            >
              Twój prywatny notatnik nocy
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Nav;
