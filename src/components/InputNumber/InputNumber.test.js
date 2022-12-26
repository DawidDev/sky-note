import { describe, expect, test } from "@jest/globals";

import { render } from "@testing-library/react";
import InputNumber from "./InputNumber";

describe("InputNumber", () => {
  test("Render with value ", () => {
    render(<InputNumber value={2} />);
    expect(document.getElementsByTagName("input").value =2);
  });
});
