// import { prettyDOM } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { checkElementsExistsQueryByText } from "../../utils/testUtils";

import PATH from "../../pages/path";

import Header from "./Header";

import messages from "./Header.messages";

let component;

const mock_path = PATH;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: mock_path.ADD_EVENT,
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Header", () => {
  beforeEach(() => {
    component = render(<Header />);
    //   console.log(prettyDOM(component.container));
  });

  test("Header is rendered", () => {
    const { container } = component;
    expect(container).toBeInTheDocument();
  });

  test("Header show correct title", () => {
    checkElementsExistsQueryByText(messages.title, component, true);
  });

  test("Header has an Event List button rendered", () => {
    checkElementsExistsQueryByText(messages.eventList, component, true);
  });
});
