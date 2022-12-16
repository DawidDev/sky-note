import theme from "../src/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: theme,
  },
  backgrounds: {
    default: 'SkyNote',
    values: [
      {
        name: 'SkyNote',
        value: '#001834',
      }]}
}