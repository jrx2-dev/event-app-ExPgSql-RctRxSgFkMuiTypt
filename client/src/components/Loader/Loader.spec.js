// import { prettyDOM } from "@testing-library/dom";
import { render } from "@testing-library/react";

import Loader from "./Loader";

let component;

describe("Loader", () => {
  beforeEach(() => {
    component = render(<Loader />);
    // console.log(prettyDOM(component.container));
  });

  test("Loader is rendered", () => {
    const { container } = component;
    expect(container).toBeInTheDocument();
  });
});
