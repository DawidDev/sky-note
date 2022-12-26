import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  test("Render component", () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId('spinner')).toBeTruthy()
  });
});
