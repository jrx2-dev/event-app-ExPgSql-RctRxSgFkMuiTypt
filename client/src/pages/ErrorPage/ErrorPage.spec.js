// import { prettyDOM } from "@testing-library/dom";
import { render } from "@testing-library/react";

import ErrorPage from "./ErrorPage";

let component;

describe("ErrorPage", () => {
  beforeEach(() => {
    component = render(<ErrorPage />);
    // console.log(prettyDOM(component.container));
  });

  test("ErrorPage is rendered", () => {
    const { container } = component;
    expect(container).toBeInTheDocument();
  });
});
