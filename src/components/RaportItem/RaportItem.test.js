import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import RaportItem from "./RaportItem";
import { ChakraProvider, useBreakpointValue } from "@chakra-ui/react";
import theme from "../../theme";

/* 
VariantSecond.args = {
  label: "Poziom zachmurzenia",
  tooltipContent: "To jest dodatkowe info",
  dataText: ['duże opady', 'silny wiatr', 'duża mgła', 'słaba widoczność', 'przymrozek'],
  variantItem: 2
};

*/

describe("RaportItem", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  test("Render component - variant 1", () => {
    render(
      <ChakraProvider theme={theme}>
        <RaportItem
          label="Example title"
          number={5}
          maxNumber={10}
          variantItem={1}
          tooltipContent="test"
        />
      </ChakraProvider>
    );

    screen.getByText("5")
    screen.getByText("/10")
    screen.getByText("Example title")

  });

  test("Render component - variant 2", () => {
    render(
      <ChakraProvider theme={theme}>
        <RaportItem
          label="Example title"
          dataText={['first', 'second']}
          variantItem={2}
          tooltipContent="test"
        />
      </ChakraProvider>
    );

    screen.getByText(/first/)
    screen.getByText(/second/)
    screen.getByText("Example title")

  });
});
