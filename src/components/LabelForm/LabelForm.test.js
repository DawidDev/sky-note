import { describe, expect, test } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import LabelForm from "./LabelForm";

describe("LabelForm", () => {
  test("Render component", () => {
    render(
      <LabelForm
        text="Label title"
      />
    );
    expect(screen.queryByText("Label title"))
  });
});
