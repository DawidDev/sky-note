import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, useBreakpointValue } from "@chakra-ui/react";
import theme from "../../theme";

describe("Nav", () => {
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
          <Nav isOpen={true} />
        </Router>
      </ChakraProvider>
    );

    screen.getByText("Strona główna")
    screen.getByText("Biblioteka gwiazd")
    screen.getByText("Dodaj gwiazdę")
    screen.getByText("Dodaj obserwacje")
    screen.getByText("Moje raporty")
  });
});
