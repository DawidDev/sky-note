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
  itemList: "#002148",
  itemListHover: "#272D81",
  menuBackground: "#272D81"
};

const fonts = {
  body: `'Red Hat Display', 'sans-serif'`,
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ colors, fonts, breakpoints });

export default theme;
