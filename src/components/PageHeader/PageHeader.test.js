import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  test("Render component", () => {
    render(<PageHeader />);
    expect(screen.getByRole('button')).toBeTruthy()
    expect(screen.getByRole('img')).toBeTruthy()
  });
});
