import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import TitlePage from "./TitlePage";

describe("TitlePage", () => {
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
    render(<TitlePage text="Label title" />);
    expect(screen.queryByText("Label title"));
  });
});
