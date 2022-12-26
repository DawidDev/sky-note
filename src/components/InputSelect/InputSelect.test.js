import { describe, expect, test } from "@jest/globals";

import { render, screen, fireEvent } from "@testing-library/react";
import InputSelect from "./InputSelect";
import selectEvent from 'react-select-event'

describe("InputSelect", () => {
  const options = [
    { value: "test", label: "test" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
    { value: "test4", label: "test4" },
  ];

  test("Render", () => {
    render(<InputSelect />);
  });

  test("Render placeholder", () => {
    const mockedOnChange = jest.fn();
    render(<InputSelect options={options} placeholder="placeholder" onChange={mockedOnChange}/>);
    const placeholder = screen.getByText("placeholder");
    expect(placeholder).toBeTruthy();
  });
});
