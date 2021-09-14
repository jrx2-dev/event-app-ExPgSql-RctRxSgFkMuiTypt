import { act } from "react-dom/test-utils";

// import { prettyDOM } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";

import ButtonWithFade from "./ButtonWithFade";

const mockOnClick = jest.fn();
const label = "Click me";
let component;

describe("Button with fade", () => {
  beforeEach(() => {
    component = render(<ButtonWithFade onClick={mockOnClick} label={label} />);
    //   console.log(prettyDOM(component.container));
  });
  test("Button is rendered", () => {
    const { container } = component;

    expect(container).toBeInTheDocument();
  });

  test("Button clicked", () => {
    const { getByText } = component;

    act(() => {
      fireEvent.click(getByText(label));
    });

    expect(mockOnClick).toHaveBeenCalled();
  });

  test("Button has correct label", () => {
    const { queryByText } = component;

    expect(queryByText(label)).toBeInTheDocument();
  });
});
