// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  gray: {
    900: '#1a365d',
    800: '#153e75',
    700: '#ffffff',
  },
  bg_button: {
    second: "#593AA2",
    main: "#831DA5"
  }
}

const theme = extendTheme({ colors })

export default theme