// import { prettyDOM } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { waitFor } from "@testing-library/dom";

import { whithFade } from "./withFade";

const text = "Mock component";

const MockComponent = () => {
  return <div>{text}</div>;
};

let FadeComponent;

let renderedFadeComponent;

describe("withFade", () => {
  beforeAll(() => {
    FadeComponent = whithFade(MockComponent);
  });

  beforeEach(() => {
    renderedFadeComponent = render(<FadeComponent />);
  });

  test("withFade render component", () => {
    const { container } = renderedFadeComponent;

    expect(container).toBeInTheDocument();
  });

  test("withFade render invisible component at mount", () => {
    const { container } = renderedFadeComponent;

    expect(container).toBeVisible();
    expect(container.childNodes[0]).not.toBeVisible();
    expect(container.childNodes[0]).toHaveStyle("opacity: 0");
    // console.log(prettyDOM(container));
  });

  test("withFade render visible component after mounted", async () => {
    const { container } = renderedFadeComponent;

    expect(container).toBeVisible();

    await waitFor(() => {
      expect(container.childNodes[0]).toBeVisible();
      expect(container.childNodes[0]).toHaveStyle("opacity: 1");
      // console.log(prettyDOM(container));
    });
  });
});
