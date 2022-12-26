import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import ItemListSm from "./ItemListSm";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, useBreakpointValue } from "@chakra-ui/react";
import theme from "../../theme";

describe("ItemListSm", () => {

  // Dla usunięcia problemu z useBreakpointValue przy testach
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("Render component", () => {
    render(
      <ChakraProvider theme={theme}>
        <Router>
          <ItemListSm data={["first", "second", "third"]} />
        </Router>
      </ChakraProvider>
    );

    // Tylko 2 opcje widoczne, ponieważ bazowy render (base w useBreakpointValue) renderuje 2 elementy
    expect(screen.getByText('first'))
    expect(screen.getByText('second'))
  });
});
