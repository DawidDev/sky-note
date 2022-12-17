// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";



// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  textLight: "#ffffff",
  bg_button: {
    main: "#831DA5",
  },
  primaryLight: "#831DA5",
  inputBorder: "#272D81", 
  itemList: "#002148"
};

const fonts = {
  body: `'Red Hat Display', 'sans-serif'`,
}

const theme = extendTheme({ colors, fonts });

export default theme;
