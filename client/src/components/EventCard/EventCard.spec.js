// import { prettyDOM } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { checkElementsExistsQueryByText } from "../../utils/testUtils";
import { formattedDate } from "../../utils/dateUtils";

import EventCard from "./EventCard";

const event = {
  firstName: "Juan",
  lastName: "Rodríguez",
  email: "juan@email.com",
  eventDate: "2021-09-08 09:45:15",
};
let component;

describe("Event card", () => {
  beforeEach(() => {
    component = render(<EventCard event={event} />);
    //   console.log(prettyDOM(component.container));
  });

  test("Card is rendered", () => {
    const { container } = component;
    expect(container).toBeInTheDocument();
  });

  test("Card show correct values", () => {
    checkElementsExistsQueryByText(
      `${event.firstName} ${event.lastName}`,
      component,
      true
    );
    checkElementsExistsQueryByText(event.email, component, true);
    checkElementsExistsQueryByText(
      formattedDate(event.eventDate),
      component,
      true
    );
  });
});
