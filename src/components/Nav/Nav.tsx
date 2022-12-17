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
  Link,
  Text,
} from "@chakra-ui/react";
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
              <Link>Strona główna</Link>
              <Link>Konto</Link>
              <Link>Biblioteka gwiazd</Link>
              <Link my="35px !important">Dodaj obserwacje</Link>
              <Link>Moje raporty</Link>
              <Link>Panel użytkownika</Link>
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
