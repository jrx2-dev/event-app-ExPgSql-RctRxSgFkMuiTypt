import { BrowserRouter as Router } from "react-router-dom";

// import { prettyDOM } from "@testing-library/dom";
import { render } from "@testing-library/react";

import NoResults from "./NoResults";

let component;

describe("NoResults", () => {
  beforeEach(() => {
    component = render(<Router><NoResults /></Router>);
    // console.log(prettyDOM(component.container));
  });

  test("NoResults is rendered", () => {
    const { container } = component;

    // console.log(prettyDOM(container));

    expect(container).toBeInTheDocument();
  });
});
