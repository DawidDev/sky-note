import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import InputText from "./InputText";

describe("InputText", () => {
    const mockedOnChange = jest.fn();

  test("Render with value ", () => {
    render(<InputText value="test" onChange={mockedOnChange} placeholder="Example placeholder"/>);
    expect(screen.getByTestId("input").value).toBe("test")
  });
});
